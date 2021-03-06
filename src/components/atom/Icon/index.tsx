import React from 'react';
import { ImageStyle, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import WrapperComponent from '../../common/Wrapper';

export interface IconExportType {
    name: ImageName;
    onPress?: (props:any) => void;
}

export interface IconExportStypeType {
    iconStyle?: StyleProp<ImageStyle>;   
}

interface IconProps {
    name: ImageName;
    onPress?: (props:any) => void;
    style: IconStyleProps;
}

interface IconStyleProps {
    wrapperStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<ImageStyle>;
}

export type ImageName = "user-profile" | "search" | "left-arrow" | "target" | "home" | "find-document" | "target-question-mark" | "lock" | "chat" | "heart";

interface ImageArray {
    name: ImageName;
    uri: any;
}

//추가 안해도 되는 방법 있을지.

const IconAtom = ({ name, style, onPress }:IconProps) => {

    const images:ImageArray[] = [{
        name: "user-profile",
        uri: require('../../../assets/icons/user-profile.png')
    }, {
        name: "search",
        uri: require('../../../assets/icons/search.png')
    }, {
        name: 'left-arrow',
        uri: require('../../../assets/icons/left-arrow.png')
    }, {
        name: 'target',
        uri: require('../../../assets/icons/target.png')
    }, {
        name: 'find-document',
        uri: require('../../../assets/icons/find-document.png')
    }, {
        name: 'home',
        uri: require('../../../assets/icons/home.png')
    }, {
        name: 'target-question-mark',
        uri: require('../../../assets/icons/target-question-mark.png')
    }, {
        name: 'lock',
        uri: require('../../../assets/icons/lock.png')
    }, {
        name: 'chat',
        uri: require('../../../assets/icons/chat.png')
    }, {
        name: 'heart',
        uri: require('../../../assets/icons/heart.png')
    }];

    const getUri = (name:string) => {
        return images.filter((i) => i.name === name)[0].uri;
    }
    
    return (
        <WrapperComponent
            isTouchable={onPress ? true : false}
            onPress={onPress}
            style={style.wrapperStyle}
        >
            <Icon
                style={style.iconStyle ?? {
                    width: 20,
                    height: 20
                }}
                source={getUri(name)}
            />        
        </WrapperComponent>
    )
}

const Icon = styled.Image``


export default React.memo(IconAtom);