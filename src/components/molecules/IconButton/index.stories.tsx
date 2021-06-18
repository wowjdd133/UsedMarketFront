import React from 'react';
import { storiesOf } from '@storybook/react-native';
import IconButtonMolecules from './index';
import { colors, SizeType } from '../../../styles/theme';


storiesOf('IconButton', module)
    .add('icon-button', () => <IconButtonMolecules
        wrapperStyle={{
            width:'100%',
            justifyContent:'center',
            alignItems:'center'
        }}
        button={{
            disabled: false,
            onPress: () => {},
            buttonStyle: {
                color: 'transparent',
                paddingHorizontal: '6px',
                paddingVertical: '6px',
            },
        }}
        icon={{
            name: 'user-profile',
        }}
        text={{
            text: "button",
            textStyle: { 
                color: colors.black,
                size: SizeType.MEDIUM,
            }
        }}
    />)
    .add('icon-button-disabled', () => <IconButtonMolecules
        wrapperStyle={{
            width:'100%',
            justifyContent:'center',
            alignItems:'center'
        }}
        button={{
            disabled: true,
            onPress: () => {},
            buttonStyle: {
                color: 'transparent',
                paddingHorizontal: '6px',
                paddingVertical: '6px',
            },
        }}
        icon={{
            name: 'user-profile',
        }}
        text={{
            text: "button",
            textStyle: { 
                color: colors.black,
                size: SizeType.MEDIUM,
            }
        }}
    />)