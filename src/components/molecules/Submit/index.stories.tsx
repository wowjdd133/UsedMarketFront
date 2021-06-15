import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SubmitMolecules from './index';
import { colors, SizeType } from '../../../styles/theme';
import { Text, View } from 'react-native';
import TextAtom from '../../atom/Text';

storiesOf('Submit', module)
    .add('submit', () => 
    <View
        style={{
            height: 130,
            width: '100%',
        }}
    >
<SubmitMolecules
        wrapperStyle={{
            flex: 1,
            marginHorizontal:15,
        }}
        button={{
            buttonStyle: {
                color: colors.orange,
                paddingVertical: '10px',
                borderStyle: {
                    color: 'transparent',
                    radius: 4
                },
                paddingHorizontal: '6px',
            },
            disabled: false,
            onPress: () => {},
            text: "인증문자 받기",
            textStyle: {
                color: colors.white,
                size: SizeType.SMALL,
                weight: 'bold',
                center: true
            },
        }}
        input={{
            onChange: (text:string) => {},
            value:"",
            placeholder:"휴대폰 번호(- 없이 숫자만 입력)",
            wrapperStyle: {
                width:'100%',
                height: 42,
                borderWidth: 0.5,
                borderRadius: 4,
                borderColor: colors.grey,
                paddingLeft: 7
            },
        }}
        text={{
            text: (
                <Text>
                    <TextAtom
                        style={{
                            textStyle: {
                                color: colors.black,
                                size: SizeType.SMALL
                            }
                        }}
                        text="전화번호가 변경되었나요? "
                    />
                    <TextAtom
                        style={{
                            textStyle: {
                                color: colors.black,
                                size: SizeType.SMALL,
                                underline: true
                            },
                        }}
                        text="이메일로 계정 찾기"
                        onPress={() => {}}
                    />
                </Text>
            ),
            textStyle:{
                color: colors.black,
                size: SizeType.SMALL,
            },
        }}
    />
    </View>
    )
    .add('submit-disabled', () => 
    <View
        style={{
            width: '100%',
            height: 130
        }}
    >
        <SubmitMolecules
                wrapperStyle={{
                    flex:1,
                    marginHorizontal:15
                }}
                button={{
                    buttonStyle: {
                        color: colors.orange,
                        paddingVertical: '10px',
                        borderStyle: {
                            color: 'transparent',
                            radius: 4
                        },
                        paddingHorizontal: '6px',
                    },
                    disabled: true,
                    onPress: () => {},
                    text: "인증문자 받기",
                    textStyle: {
                        color: colors.white,
                        size: SizeType.SMALL,
                        weight: 'bold',
                        center: true
                    },
                }}
                input={{
                    onChange: (text:string) => {},
                    value:"",
                    placeholder:"휴대폰 번호(- 없이 숫자만 입력)",
                    wrapperStyle: {
                        width:'100%',
                        height: 42,
                        borderWidth: 0.5,
                        borderRadius: 4,
                        borderColor: colors.grey,
                        paddingLeft: 7
                    },
                }}
                text={{
                    text: (
                        <Text>
                            <TextAtom
                                style={{
                                    textStyle: {
                                        color: colors.black,
                                        size: SizeType.SMALL
                                    }
                                }}
                                text="전화번호가 변경되었나요? "
                            />
                            <TextAtom
                                style={{
                                    textStyle: {
                                        color: colors.black,
                                        size: SizeType.SMALL
                                    }
                                }}
                                text="이메일로 계정 찾기"
                                onPress={() => {}}
                            />
                        </Text>
                    ),
                    textStyle:{
                        color: colors.black,
                        size: SizeType.SMALL,
                        underline:true
                    },
                    onPress:() => {}
                }}
            />
    </View>
    )