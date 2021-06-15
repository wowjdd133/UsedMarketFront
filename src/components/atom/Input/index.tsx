import React, { ComponentType, createRef, ForwardRefExoticComponent, RefAttributes, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components/native';
import WrapperComponent from '../../common/Wrapper';
import { StyleProp, TextInputProps, ViewStyle, TextInput, KeyboardTypeOptions } from 'react-native';

export interface InputExportType {
    placeholder?: string;
    value: string;
    onChange: (text:string) => void;
    focus?: boolean;
    keyboardType?: KeyboardTypeOptions;
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
}

const InputAtom = ({ wrapperStyle, placeholder, onChange, value,focus, keyboardType = 'default' }:InputProps) => {

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
                placeholder={placeholder ?? undefined}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
            />
        </WrapperComponent>
    )
}

const Input = styled.TextInput`
    width: 100%;
    height: 100%;
`

export default React.memo(InputAtom);