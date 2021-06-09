import React from 'react';
import { storiesOf } from '@storybook/react-native';
import IconButtonMolecules from './index';
import { colors } from '../../../styles/theme';


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
                size: 'medium',
            }
        }}
    />)