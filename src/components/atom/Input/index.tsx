import React from 'react';
import styled from 'styled-components/native';
import WrapperComponent from '../../common/Wrapper';
import { StyleProp, ViewStyle } from 'react-native';

interface InputProps {
    wrapperStyle: StyleProp<ViewStyle>
    placeholder?: string;
}

const InputAtom = ({ wrapperStyle, placeholder }:InputProps) => {
    return (
        <WrapperComponent
            style={wrapperStyle}
        >
            <Input 
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