import React from 'react';
import styled from 'styled-components/native';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

interface WrapperType {
    style: StyleProp<ViewStyle>;
    isCenter?: boolean;
    isTouchable?: boolean;
    onPress?: (props:any) => void;
    children: React.ReactNode;
}

const WrapperComponent = ({style, isCenter = false, children, isTouchable = false, onPress}: WrapperType) => {

    const Component = isTouchable ? TouchableOpacity : View;

    const Wrapper = styled(Component)<{
        isCenter: boolean
        onPress?: (props:any) => void;
    }>`
        ${props => props.isCenter ? `
            justify-content: center;
            align-items: center;
        ` : ''}
    `

    return (
        <Wrapper
            onPress={onPress}
            style={style}
            isCenter={isCenter}
        >
            {children}
        </Wrapper>
    )
}



export default WrapperComponent;