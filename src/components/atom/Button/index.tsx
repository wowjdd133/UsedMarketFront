import React, { Children } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { colors, SizeType } from '../../../styles/theme';
import WrapperComponent from '../../common/Wrapper';
import TextComponent, { TextStyleProps } from '../Text';

export interface ButtonExportType {
    onPress: (props:any) => void;
    text?: string;
    disabled: boolean;
}

export interface ButtonExportStyleType {
    textStyle?: TextStyleProps;
    buttonStyle: ButtonStyleProps;
}

interface ButtonProps {
    style: StyleProps;
    onPress: (props:any) => void;
    text?: string;
    disabled: boolean;
    children?: React.ReactNode;
}

interface StyleProps {
    wrapperStyle?: StyleProp<ViewStyle>;
    buttonStyle: ButtonStyleProps;
    textStyle?: TextStyleProps;
}

interface ButtonStyleProps {
    color: string;
    borderStyle?: {
        isShow?: boolean;
        color?: string;
        radius?: number;
    }
    paddingHorizontal: string;
    paddingVertical: string;
}

const ButtonAtom = ({disabled, onPress, style, text, children}:ButtonProps) => {

    const wrapperStyle = style.wrapperStyle ?? {
        alignSelf: 'center',
        width: '90%'
    }

    const textStyle = style.textStyle ?? {
        size: SizeType.MEDIUM,
        color: colors.black,
        weight: 'normal'
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
                {
                    text ? (
                        <TextComponent
                            style={{
                                textStyle: disabled ? {
                                    size: textStyle.size,
                                    color: colors.white,
                                    weight: textStyle.weight ? textStyle.weight : 'normal'
                                } : textStyle,
                                wrapperStyle: {
                                    justifyContent:'center',
                                    alignItems:'center'
                                },
                            }}
                            text={text}
                        />
                    ): null
                }
                {
                    children ? children : null
                }
            </Button>
        </WrapperComponent>
    )
}

const Button = styled.TouchableOpacity<ButtonStyleProps>`
    background-color: ${(props) => props.disabled ? props.theme.colors.grey_light : props.color};
    border: ${(props) => props.borderStyle?.isShow ? `1px solid ${props.borderStyle?.color}` : '0px'}
    padding-vertical: ${(props) => props.paddingVertical};
    padding-horizontal: ${(props) => props.paddingHorizontal};
    border-radius: ${props => props.borderStyle?.radius ?? '0'}px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export default React.memo(ButtonAtom);
