import React from 'react';
import styled from 'styled-components/native';
import { StyleProp, ViewStyle } from 'react-native';

interface WrapperType {
    style: StyleProp<ViewStyle>;
    isCenter?: boolean;
    children: React.ReactNode;
}

const WrapperComponent = ({style, isCenter = false, children}: WrapperType) => {
    return (
        <Wrapper
            style={style}
            isCenter={isCenter}
        >
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.View<{
    isCenter: boolean
}>`
    ${props => props.isCenter ? `
        justify-content: center;
        align-items: center;
    ` : ''}
`

export default WrapperComponent;