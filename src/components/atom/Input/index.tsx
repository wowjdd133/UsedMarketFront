import React from 'react';
import styled from 'styled-components/native';
import WrapperComponent from '../../common/Wrapper';
import { StyleProp, ViewStyle } from 'react-native';

export interface InputExportType {
    placeholder?: string;
    value: string;
    onChange: (text:string) => void;
}

export interface InputExportStyleType {
    wrapperStyle?: StyleProp<ViewStyle>
}

interface InputProps {
    wrapperStyle: StyleProp<ViewStyle>
    placeholder?: string;
    value: string;
    onChange: (text:string) => void;
}

const InputAtom = ({ wrapperStyle, placeholder, onChange, value }:InputProps) => {
    return (
        <WrapperComponent
            style={wrapperStyle}
        >
            <Input 
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

export default InputAtom;