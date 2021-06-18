import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import FastImage, { Priority } from 'react-native-fast-image';
import WrapperComponent from '../../common/Wrapper';
import styled from 'styled-components/native';

interface ImageStyle {
    borderRadius?: number;
}

interface ImageType extends ImageStyle {
    url: string;
    priority?: Priority;
    wrapperStyle?: StyleProp<ViewStyle>
}

const ImageAtom = ({url, priority, wrapperStyle, borderRadius}:ImageType) => (
    <WrapperComponent
        style={wrapperStyle}
    >
        <FastImageStyle
            source={{
                uri: url,
                priority: priority
            }}
            borderRadius={borderRadius}
        />
    </WrapperComponent>
)

const FastImageStyle = styled(FastImage)<ImageStyle>`
    width: 100%;
    height: 100%;
    ${props => props.borderRadius ? `border-radius: ${props.borderRadius}px` : ''}
`

export default ImageAtom;