import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { colors, SizeType } from '../../../styles/theme';
import WrapperComponent from '../../common/Wrapper';
import TextComponent from '../Text';

interface ButtonProps {
    style: StyleProps;
    onPress: (props:any) => void;
    text: string;
    disabled: boolean;
}

interface StyleProps {
    wrapperStyle?: StyleProp<ViewStyle>;
    buttonStyle: ButtonStyleProps;
    textStyle: {
        size: SizeType
        color: string;
    }
}

interface ButtonStyleProps {
    color: string;
    borderStyle?: {
        isShow: boolean;
        color: string;
    }
    paddingHorizontal: string;
    paddingVertical: string;
}

const ButtonComponent = ({disabled, onPress, style, text}:ButtonProps) => {

    const wrapperStyle = style.wrapperStyle ?? {
        alignSelf: 'center',
        width: '90%'
    }

    return (
        <WrapperComponent
            style={wrapperStyle}
        >
            <Button
                onPress={onPress}
                disabled={disabled}
                {...style.buttonStyle}
            >
                <TextComponent
                    style={{
                        textStyle: disabled ? {
                            size: style.textStyle.size,
                            color: colors.white
                        } : style.textStyle,
                        wrapperStyle: {
                            justifyContent:'center',
                            alignItems:'center'
                        }
                    }}
                    text={text}
                />
            </Button>
        </WrapperComponent>
    )
}

const Button = styled.TouchableOpacity<ButtonStyleProps>`
    background-color: ${(props) => props.disabled ? props.theme.colors.grey : props.color};
    border: ${(props) => props.borderStyle?.isShow ? `1px solid ${props.borderStyle?.color}` : '0px'}
    padding-vertical: ${(props) => props.paddingVertical};
    padding-horizontal: ${(props) => props.paddingHorizontal};
`

export default ButtonComponent;
