import * as React from 'react';
import WrapperComponent from '../../../components/common/Wrapper';
import AuthTemplate from '../../../components/template/Auth/index';
import TextAtom from '../../../components/atom/Text/index';
import axios from 'axios';
import { Text } from 'react-native';
import { colors, SizeType } from '../../../styles/theme';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import DeviceInfo from 'react-native-device-info';

const PhoneAuthScreen = () => {

    const route:any = useRoute();
    const navigation = useNavigation();

    const districtId = route.params.districtId!

    const [phoneNumber, setPhoneNumber] = React.useState('');

    const sendPhoneMessage = async (phoneNumber:string) => {
        const deviceId = await DeviceInfo.getUniqueId()

        // if(!deviceId) {
            
        // }
        
        const data = await axios.post('http://localhost:3000/sns/code', {
            phoneNumber: phoneNumber,
            deviceId: deviceId
        });

        if(data.status === 201) {
            return true;
        }

        return false;
    }

    const handleChangePhoneNumber = (text:string) => {
        setPhoneNumber(text.replace(/-/gi, ""));
    }

    const handlePressButton = () => {
        mutate(phoneNumber);
    }

    const { mutate, isLoading } = useMutation({
        mutationFn: sendPhoneMessage,
        onSuccess: data => {
            console.log({
                data
            });
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
                authOrganism={{
                    submit: {
                        button: {
                           disabled: false,
                           onPress: handlePressButton,
                           text: "인증문자 받기",
                        },
                        input: {
                           onChange: handleChangePhoneNumber,
                           value: phoneNumber,
                           placeholder:"휴대폰 번호(- 없이 숫자만 입력)", 
                           keyboardType: 'numeric'
                        },
                        text: (
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
                        )
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
               }}
               header={{
                   title: '전화번호 인증'
               }}
            />
        </WrapperComponent>   
    )
}

export default PhoneAuthScreen;