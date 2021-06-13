import React from 'react';
import styled from 'styled-components';
import WrapperComponent from '../../common/Wrapper';
import IconAtom, { ImageName } from '../../atom/Icon/index';
import TextAtom from '../../atom/Text/index';
import { colors, SizeType } from '../../../styles/theme';
import { StyleProp, ViewStyle } from 'react-native';

interface ErrorBoxType {
    iconName: ImageName;
    errorText: string;
    touchableText: string;
    onPressText?: () => void;
    wrapperStyle?: StyleProp<ViewStyle>
}

const ErrorBox = ({iconName, errorText, touchableText, onPressText, wrapperStyle}:ErrorBoxType) => {
    return (
        <WrapperComponent
            style={wrapperStyle ?? {
                backgroundColor:colors.white,
                flex: 1 ,
                justifyContent:'center',
                alignItems:'center'    
            }}

        >
            <IconAtom
                style={{
                    iconStyle: {
                        width: 50,
                        height: 50
                    },
                }}
                name={iconName}
            />
            <TextAtom
                style={{
                    textStyle: {
                        color: colors.grey,
                        size: SizeType.SMALL,
                        center: true
                    },
                    wrapperStyle: {
                        marginTop: 25,
                        
                    }
                }}
                text={errorText}
            />
            <TextAtom
                style={{
                    textStyle: {
                        color: colors.orange,
                        size: SizeType.SMALL
                    },
                    wrapperStyle: {
                        marginTop: 15
                    }
                }}
                text={touchableText}
                onPress={onPressText}
            />
        </WrapperComponent>
    )    
}

export default ErrorBox;