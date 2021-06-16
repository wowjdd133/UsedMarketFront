import React, { ComponentType, createRef, ForwardRefExoticComponent, RefAttributes, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import WrapperComponent from '../../common/Wrapper';
import TextAtom from '../Text/index';
import { StyleProp, TextInputProps, ViewStyle, TextInput, KeyboardTypeOptions } from 'react-native';
import { colors, SizeType } from '../../../styles/theme';

export interface InputExportType {
    placeholder?: string;
    value: string;
    onChange: (text:string) => void;
    focus?: boolean;
    keyboardType?: KeyboardTypeOptions;
    maxLength?: number;
    errorMessage?: string;
}

export interface InputExportStyleType {
    wrapperStyle?: StyleProp<ViewStyle>
}

interface InputProps {
    wrapperStyle?: StyleProp<ViewStyle>
    placeholder?: string;
    value: string;
    focus?: boolean;
    onChange: (text:string) => void;
    keyboardType?: KeyboardTypeOptions
    maxLength?: number;
    errorMessage?: string;
}

const InputAtom = ({ wrapperStyle, placeholder, errorMessage, onChange, maxLength, value,focus, keyboardType = 'default' }:InputProps) => {

    const inputRef = createRef<TextInput>();

    useLayoutEffect(() => {
        if(focus) {
            inputRef.current?.focus();
        }
    }, [focus])

    return (
        <WrapperComponent
            style={wrapperStyle}
        >
            <Input 
                ref={inputRef}
                keyboardType={keyboardType}
                onChangeText={onChange}
                value={value}
                maxLength={maxLength}
                placeholder={placeholder ?? undefined}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
            />
            {
                errorMessage ? (
                    <TextAtom
                        style={{
                            textStyle:{
                                color:colors.red,
                                size: SizeType.MORE_SMALL
                            },
                            wrapperStyle: {
                                marginTop: 6
                            }
                        }}
                        text={errorMessage}
                    />
                ) : null
            }
        </WrapperComponent>
    )
}

const Input = styled.TextInput`
    width: 100%;
    height: 100%;
`

export default React.memo(InputAtom);