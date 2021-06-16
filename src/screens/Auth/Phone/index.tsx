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

const _LIMIT_SECOND = 300;
const _MAX_COUNT = 30;

const PhoneAuthScreen = () => {

    const route:any = useRoute();
    const navigation = useNavigation();

    const districtId = route.params.districtId!

    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [deviceId, setDeviceId] = React.useState('');
    const [code, setCode] = React.useState('');
    const [errorType, setErrorType] = React.useState<ErrorTypeEnum>();
    const { handleReset, isActive, timerSecond : second, setIsActive} = useTimerHook(_LIMIT_SECOND);
    const {isLoading : isMatchCodeLoading, data, error, refetch } = useQuery('matchCode', async () => {
        const data = await axios.get('http://localhost:3000/auth/code/match', {
            params: {
                deviceId,
                code
            }
        });
        console.log({
            data
        });
    }, {
        enabled: false,
        retry: false
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
                text: `문자를 보낸 10초 후에 시도해주세요.`,
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
                throw new Error('하루 전입니다.')
            } else {
                if(objectedValue.count >= _MAX_COUNT) {
                    Snackbar.show({
                        text: '하루 최대 문자 보내기 개수를 초과했습니다.',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor:'#000000',
                        textColor: '#ffffff', 
                    })
    
                    return false;
                } else {
                    setTimeout(() => {
                        Snackbar.show({
                            text: `하루 최대 문자 보내기 개수가 ${(_MAX_COUNT - objectedValue.count).toString()}개 남았습니다.`,
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
                    text: '인증번호가 문자로 전송됐습니다. (최대 20초 소요)',
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
                           text: "인증문자 받기" + (isActive && second !== 0 ? `(${Math.floor(second / 60)}분 ${second % 60}초)` : '')
                        },
                        input: {
                           onChange: handleChangePhoneNumber,
                           value: phoneNumber,
                           placeholder:"휴대폰 번호(- 없이 숫자만 입력)", 
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
                                   text="전화번호가 변경되었나요? "
                               />
                               <TextAtom
                                   style={{
                                       textStyle: {
                                           color: colors.black,
                                           size: SizeType.MORE_SMALL,
                                           underline:true
                                       }
                                   }}
                                   text="이메일로 계정 찾기"
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
                               호박마켓은 휴대폰 번호로 가입해요.{"\n"}번호는
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
                                   text={` 안전하게 보관 `}
                               />
                               되며{"\n"}어디에도 공개되지 않아요.
                           </Text>
                       )
                    },
                    code: {
                        isShow: isActive,
                        button: {
                            disabled: code.length !== 4,
                            onPress: handlePressCheckCode,
                            text: "인증번호 확인"
                        },
                        input: {
                            onChange: handleChangeCode,
                            placeholder: '인증번호 입력',
                            value: code,
                            keyboardType: 'numeric',
                            wrapperStyle: {
                                marginTop: 20
                            },
                            maxLength: 4,
                            errorMessage: errorType ? "인증문자를 다시 입력해주세요" : undefined
                        }
                        
                    }
               }}
               header={{
                   title: '전화번호 인증'
               }}
            />
        </WrapperComponent>   
    )
}

export default PhoneAuthScreen;