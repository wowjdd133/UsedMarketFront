import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import WrapperComponent from '../../common/Wrapper';

export interface IconExportType {
    name: string;
    onPress?: (props:any) => void;
}

export interface IconExportStypeType {
    iconStyle?: StyleProp<ImageStyle>;   
}

interface IconProps {
    name: string;
    onPress?: (props:any) => void;
    style: IconStyleProps;
}

interface IconStyleProps {
    wrapperStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ImageStyle>;
}

const IconAtom = ({ name, style, onPress }:IconProps) => {

    const images = [{
        name: "user-profile",
        uri: require('../../../assets/icons/user-profile.png')
    }];

    return (
        <WrapperComponent
            isTouchable={true}
            style={style.wrapperStyle}
        >
            <Icon
                style={style.iconStyle}
                source={images[0].uri}
            />        
        </WrapperComponent>
    )
}

const Icon = styled.Image``


export default IconAtom;