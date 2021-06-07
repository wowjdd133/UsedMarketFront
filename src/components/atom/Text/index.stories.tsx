import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { colors } from '../../../styles/theme';

import Text from './index';

storiesOf('Text', module)
    .add('text-big', () => <Text style={{
        textStyle: {
            color: colors.black,
            size: 'big'
        }
    }}
    text="큰 텍스트"
    />)
    .add('text-medium', () => <Text style={{
        textStyle: {
            color: colors.black,
            size: 'medium'
        }
    }}
    text="중간 텍스트"
    />)
    .add('text-small', () => <Text style={{
        textStyle: {
            color: colors.black,
            size: 'small'
        }
    }}
    text="큰 텍스트"
    />)
    .add('text-big-orange', () => <Text style={{
        textStyle: {
            color: colors.orange,
            size: 'big'
        }
    }}
    text="큰 텍스트"
    />)
    .add('text-big-bold-orange', () => <Text style={{
        textStyle: {
            color: colors.orange,
            size: 'big',
            weight: 'bold'
        }
    }}
    text="큰 텍스트"
    />)