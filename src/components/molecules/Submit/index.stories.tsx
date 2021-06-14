import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SubmitMolecules from './index';
import { colors, SizeType } from '../../../styles/theme';

storiesOf('Submit', module)
    .add('submit', () => <SubmitMolecules
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
    />)
    .add('submit-disabled', () => <SubmitMolecules
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
    />)