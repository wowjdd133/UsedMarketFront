import React from 'react';
import styled from 'styled-components/native';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface WrapperType {
    style: StyleProp<ViewStyle>;
    isCenter?: boolean;
    isTouchable?: boolean;
    isSafeArea?: boolean
    onPress?: (props:any) => void;
    children: React.ReactNode;
}

const WrapperComponent = ({style, isCenter = false, children, isTouchable = false, onPress, isSafeArea = false}: WrapperType) => {

    return isSafeArea ? (
        <SafeAreaWrapper
            style={style}
            isCenter={isCenter}
        >
            {children}
        </SafeAreaWrapper>
    ) : (
        <Wrapper
            style={style}
            isCenter={isCenter}
            onPress={onPress}
            disabled={onPress ? true : false}
        >
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.TouchableOpacity<{
    isCenter: boolean
}>`
    ${props => props.isCenter ? `
        justify-content: center;
        align-items: center;
    ` : ''}
`

const SafeAreaWrapper = styled.SafeAreaView<{
    isCenter: boolean
}>`
    ${props => props.isCenter ? `
        justify-content: center;
        align-items: center;
    ` : ''}
`


export default WrapperComponent;