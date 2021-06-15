import React from 'react';
import { Text } from 'react-native';
import AuthTemplate from './index';
import TextAtom from '../../atom/Text/index';
import { storiesOf } from '@storybook/react-native';
import { colors, SizeType } from '../../../styles/theme';

storiesOf('Auth', module)
    .add('phone-auth', () => <AuthTemplate
        wrapperStyle= {{
            flex:1
        }}
        authOrganism={{
             submit: {
                 button: {
                    disabled: false,
                    onPress: () => {},
                    text: "인증문자 받기",
                 },
                 input: {
                    onChange: (text:string) => {},
                    value:"",
                    placeholder:"휴대폰 번호(- 없이 숫자만 입력)", 
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
    />)
    .add('phone-auth', () => <AuthTemplate
    wrapperStyle= {{
        flex:1
    }}
    authOrganism={{
         submit: {
             button: {
                disabled: false,
                onPress: () => {},
                text: "인증문자 받기",
             },
             input: {
                onChange: (text:string) => {},
                value:"",
                placeholder:"휴대폰 번호(- 없이 숫자만 입력)", 
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
/>)
 .add('email-auth', () => <AuthTemplate
 wrapperStyle= {{
     flex:1
 }}
 authOrganism={{
      submit: {
          button: {
             disabled: false,
             onPress: () => {},
             text: "이메일 보내기",
          },
          input: {
             onChange: (text:string) => {},
             value:"",
             placeholder:"이메일", 
          },
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
/>)