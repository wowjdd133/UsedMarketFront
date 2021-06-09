import React from 'react';
import { storiesOf } from '@storybook/react-native';
import InputAtom from './index';
import { colors } from '../../../styles/theme';

storiesOf('Input', module)
    .add('input', () => 
        <InputAtom 
            placeholder="동명(읍, 면)으로 검색 (ex. 서초동)"
            wrapperStyle={{
                width: '90%',
                alignSelf:'center',
                height: 36,
                borderBottomWidth:1,
                borderBottomColor: colors.orange,
                backgroundColor: colors.green
            }}
        />
    )