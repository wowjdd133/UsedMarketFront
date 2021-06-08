
import { storiesOf } from '@storybook/react-native'
import React from 'react';
import ButtonComponent from './'
import { colors, fontSizes, SizeType } from '../../../styles/theme'

storiesOf('Button', module)
    .add('button', () => (
        <ButtonComponent
            disabled={false}
            onPress={() => {}}
            style={{
                buttonStyle: {
                    borderStyle : {
                        color: colors.black,
                        isShow: true
                    },
                    color: colors.white,
                    paddingHorizontal: '26px',
                    paddingVertical: '15px'
                },
                textStyle: {
                    size: SizeType.MEDIUM,
                    color: colors.black
                }
            }}
            text="버튼"
        />
    ))
    .add('button-disabled', () => (
        <ButtonComponent
            disabled={true}
            onPress={() => {}}
            style={{
                buttonStyle: {
                    borderStyle : {
                        color: colors.black,
                        isShow: true
                    },
                    color: colors.white,
                    paddingHorizontal: '26px',
                    paddingVertical: '15px'
                },
                textStyle: {
                    size: SizeType.MEDIUM,
                    color: colors.black
                }
            }}
            text="버튼"
        />
    ))