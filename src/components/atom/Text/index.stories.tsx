import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { colors, commons } from '../../../styles/theme';

import Text from './index';

storiesOf('Text', module)
    .add('text-big', () => <Text style={{
        textStyle: {
            color: colors.black,
            size: 'big'
        },
        wrapperStyle: {
            alignItems:'center',
            justifyContent:'center'
        }
    }}
    text="큰 텍스트"
    />)
    .add('text-medium', () => <Text style={{
        textStyle: {
            color: colors.black,
            size: 'medium'
        },
        wrapperStyle: {
            alignItems:'center',
            justifyContent:'center'
        }
    }}
    text="중간 텍스트"
    />)
    .add('text-small', () => <Text style={{
        textStyle: {
            color: colors.black,
            size: 'small'
        },
        wrapperStyle: {
            alignItems:'center',
            justifyContent:'center'
        }
    }}
    text="작은 텍스트"
    />)
    .add('text-big-orange', () => <Text style={{
        textStyle: {
            color: colors.orange,
            size: 'big'
        },
        wrapperStyle: {
            alignItems:'center',
            justifyContent:'center'
        }
    }}
    text="큰 오렌지색 텍스트"
    />)
    .add('text-big-bold-orange', () => <Text style={{
        textStyle: {
            color: colors.orange,
            size: 'big',
            weight: 'bold'
        },
        wrapperStyle: {
            alignItems:'center',
            justifyContent:'center'
        }
    }}
    text="큰 오렌지색 두꺼운 텍스트"
    />)