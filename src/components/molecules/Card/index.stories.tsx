import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CardMolecules from './index';
import TextAtom from '../../atom/Text';
import { colors, SizeType } from '../../../styles/theme';
import {Text} from 'react-native';
import WrapperComponent from '../../common/Wrapper';


storiesOf('Card', module)
    .add('card', () => <CardMolecules
        icon={{
            name:'lock',
        }}
        wrapperStyle={{
            flex:1,
            justifyContent:'center',
            alignItems: 'center',
            flexDirection:'row'
        }}
        rightWrapperStyle={{
            marginLeft: 15
        }}
        text={{
            textStyle: {
                color: colors.black,
                size: SizeType.SMALL
            },
            text: <Text
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
        }}
    />)