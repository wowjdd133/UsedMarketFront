import React from 'react';
import WrapperComponent from './Wrapper';
import { ActivityIndicator } from 'react-native'
import { colors } from '../../styles/theme';

const LoadingCommon = () => {
    return (
        <WrapperComponent
            style={{
                position:'absolute',
                flex: 1,
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                justifyContent:'center',
                alignItems:'center'
            }}
            isCenter
        >
            <ActivityIndicator 
                size="large"
                color={colors.grey}
            />
        </WrapperComponent>
    )
}

export default LoadingCommon;