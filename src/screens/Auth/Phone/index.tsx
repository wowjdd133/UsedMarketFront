import * as React from 'react';
import WrapperComponent from '../../../components/common/Wrapper';
import AuthTemplate from '../../../components/template/Auth/index';
import TextAtom from '../../../components/atom/Text/index';
import axios from 'axios';
import { Text } from 'react-native';
import { colors, SizeType } from '../../../styles/theme';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useMutation, useQuery } from 'react-query';
import DeviceInfo from 'react-native-device-info';
import { useTimerHook } from '../../../hooks/timer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';
import { ErrorTypeEnum } from '../../../enums/Error.type.enum';
import { useAuthDispatch } from '../../../contexts/AuthContext';

const _LIMIT_SECOND = 300;
const _MAX_COUNT = 30;

interface RegisterOrLoginReturnType {
    data: {
        id: number,
        district: {
            id: number;
            sig_eng_name: string;
            sig_kor_name: string;
        }
    }
}

const PhoneAuthScreen = () => {

    const route:any = useRoute();
    const navigation = useNavigation();

    const districtId = route.params.districtId!

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [deviceId, setDeviceId] = React.useState('');
    const [code, setCode] = React.useState('');
    const [errorType, setErrorType] = React.useState<ErrorTypeEnum>();
    const dispatch = useAuthDispatch();
    const { handleReset, isActive, timerSecond : second, setIsActive} = useTimerHook(_LIMIT_SECOND);
    const {isLoading : isMatchCodeLoading, data, error, refetch } = useQuery('matchCode', async () => {
        const data = await axios.get('http://localhost:3000/auth/code/match', {
            params: {
                deviceId,
                code
            }
        });
    }, {
        enabled: false,
        retry: false,
        onSuccess:async () => {
            try {
                const {data}: RegisterOrLoginReturnType= await axios.post('http://localhost:3000/auth/register', {
                    phoneNumber: phoneNumber.replace(/ /gi, ""),
                    deviceId,
                    districtId
                })

                console.log(data);

                if(data) {
                    dispatch({
                        type: 'SIGN_IN',
                        state: {
                            districtId: data.district.id,
                            districtName: data.district.sig_kor_name,
                            isSignIn: true,
                            userId: data.id
                        }
                    });
                }
            } catch (err) {
                console.log(err);
                if(err?.response?.data?.status === ErrorTypeEnum.PHONE_NUMBER_ALREADY_EXIST) {
                    try {
                        const {data:loginData}:RegisterOrLoginReturnType = await axios.post('http://localhost:3000/auth/login', {
                            phoneNumber: phoneNumber.replace(/ /gi, ""),
                            deviceId,
                        });

                        if(loginData) {
                            console.log(loginData);
                            dispatch({
                                type: 'SIGN_IN',
                                state: {
                                    districtId: loginData.district.id,
                                    districtName: loginData.district.sig_kor_name,
                                    isSignIn: true,
                                    userId: loginData.id
                                }
                            });
                        }

                    } catch (err) {
                        //error
                        console.log(err);
                        console.log('??????');
                    }
                } else {
                    //error
                }
            }
        }
    })

    React.useLayoutEffect(() => {
        if(error) {
            setErrorType(ErrorTypeEnum.NOT_FOUND);
        }
    }, [error])

    React.useEffect(() => {
        (async () => {
            const deviceId = await DeviceInfo.getUniqueId();
            setDeviceId(deviceId);
        })();
    }, [])

    const sendPhoneMessage = async (phoneNumber:string) => {
        if(isAfter10Second()) {
            if(await checkSNSCount()) {
                const data = await axios.post('http://localhost:3000/sns/code', {
                    phoneNumber: phoneNumber,
                    deviceId: deviceId
                });
        
                if(data.status === 201) {
                    return true;   
                }
            }
        } else {
            Snackbar.show({
                text: `????????? ?????? 10??? ?????? ??????????????????.`,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor:'#000000',
                textColor: '#ffffff', 
            })
        }

        return false
    }

    const isAfter10Second = React.useCallback(() =>{
        return _LIMIT_SECOND >= second + 10 || _LIMIT_SECOND === second
    }, [second])

    const checkSNSCount = React.useCallback(async () => {
        try {
            const value = await AsyncStorage.getItem('phoneAuth');
            
            if(!value) {
                throw new Error();
            }

            const objectedValue = JSON.parse(value);

            const prevDay = new Date();
            prevDay.setDate(prevDay.getDate() - 1);

            if(objectedValue.time <= prevDay.getTime()) {
                throw new Error('?????? ????????????.')
            } else {
                if(objectedValue.count >= _MAX_COUNT) {
                    Snackbar.show({
                        text: '?????? ?????? ?????? ????????? ????????? ??????????????????.',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor:'#000000',
                        textColor: '#ffffff', 
                    })
    
                    return false;
                } else {
                    setTimeout(() => {
                        Snackbar.show({
                            text: `?????? ?????? ?????? ????????? ????????? ${(_MAX_COUNT - objectedValue.count).toString()}??? ???????????????.`,
                            duration: Snackbar.LENGTH_LONG,
                            backgroundColor:'#000000',
                            textColor: '#ffffff', 
                        })
                    }, Snackbar.LENGTH_LONG + 2000)
                }
    
                await AsyncStorage.setItem('phoneAuth', JSON.stringify({
                    time: objectedValue.time,
                    count: objectedValue.count + 1
                }));
            }
        } catch (err) {
            await AsyncStorage.setItem('phoneAuth', JSON.stringify({
                time: new Date().getTime(),
                count: 1
            }))
        }

        return true;
    }, [])

    const handleChangePhoneNumber = React.useCallback((text:string) => {
        const phoneNum = text.replace(/-/gi, "");
        if(phoneNum.replace(/ /gi, "").length >= 12) {
            return;
        }
        const addSpacePhoneNum = phoneNum.replace(/(^01.{1})([0-9]{4})([0-9]{4})/, "$1 $2 $3");
        setPhoneNumber(addSpacePhoneNum);
    }, [setPhoneNumber])

    const handleChangeCode = React.useCallback((text:string) => {
        setCode(text);
    }, [setCode]);

    const handlePressButton = React.useCallback(() => {
        mutate(phoneNumber);
    },[phoneNumber]);

    const handlePressCheckCode = React.useCallback(() => {
        refetch()
    }, [])

    const { mutate, isLoading } = useMutation({
        mutationFn: sendPhoneMessage,
        onSuccess: async data => {
            if(data) {
                if(isActive) {
                    console.log('reset');
                    handleReset();
                } else {
                    setIsActive(true);
                }

                Snackbar.show({
                    text: '??????????????? ????????? ??????????????????. (?????? 20??? ??????)',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor:'#000000',
                    textColor: '#ffffff', 
                })
            }
        }
    })


    return (
        <WrapperComponent
            isSafeArea={true}
            style={{
                flex:1,
                width: '100%',
                backgroundColor:colors.white,
            }}
        >
            <AuthTemplate 
                isLoading={isLoading || isMatchCodeLoading}
                authOrganism={{
                    submit: {
                        button: {
                           disabled: phoneNumber.length <= 12,
                           onPress: handlePressButton,
                           text: "???????????? ??????" + (isActive && second !== 0 ? `(${Math.floor(second / 60)}??? ${second % 60}???)` : '')
                        },
                        input: {
                           onChange: handleChangePhoneNumber,
                           value: phoneNumber,
                           placeholder:"????????? ??????(- ?????? ????????? ??????)", 
                           keyboardType: 'numeric',
                        },
                        text: !isActive ? (
                           <Text>
                               <TextAtom
                                   style={{
                                       textStyle: {
                                           color: colors.black,
                                           size: SizeType.MORE_SMALL
                                       }
                                   }}
                                   text="??????????????? ??????????????????? "
                               />
                               <TextAtom
                                   style={{
                                       textStyle: {
                                           color: colors.black,
                                           size: SizeType.MORE_SMALL,
                                           underline:true
                                       }
                                   }}
                                   text="???????????? ?????? ??????"
                                   onPress={() => {}}
                               />
                           </Text>
                        ) : null
                    },
                    card: {
                       iconName: 'lock',
                       text: (
                           <Text
                               style={{
                                   fontSize: 17,
                               }}
                           >
                               ??????????????? ????????? ????????? ????????????.{"\n"}?????????
                               <TextAtom
                                   style={{
                                       textStyle: {
                                           color: colors.black,
                                           size: SizeType.SMALL,
                                           weight: 'bold'
                                       },
                                       wrapperStyle: {
                                           marginTop:-4
                                       }                   
                                   }}
                                   text={` ???????????? ?????? `}
                               />
                               ??????{"\n"}???????????? ???????????? ?????????.
                           </Text>
                       )
                    },
                    code: {
                        isShow: isActive,
                        button: {
                            disabled: code.length !== 4,
                            onPress: handlePressCheckCode,
                            text: "???????????? ??????"
                        },
                        input: {
                            onChange: handleChangeCode,
                            placeholder: '???????????? ??????',
                            value: code,
                            keyboardType: 'numeric',
                            wrapperStyle: {
                                marginTop: 20
                            },
                            maxLength: 4,
                            errorMessage: errorType ? "??????????????? ?????? ??????????????????" : undefined
                        }
                        
                    }
               }}
               header={{
                   title: '???????????? ??????'
               }}
            />
        </WrapperComponent>   
    )
}

export default PhoneAuthScreen;