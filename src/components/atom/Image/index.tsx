import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import FastImage, { Priority } from 'react-native-fast-image';
import WrapperComponent from '../../common/Wrapper';

interface ImageType {
    url: string;
    priority?: Priority;
    wrapperStyle?: StyleProp<ViewStyle>
}

const ImageAtom = ({url, priority, wrapperStyle}:ImageType) => {
    <WrapperComponent
        style={wrapperStyle}
    >
        <FastImage
            style={{width: '100%', height:'100%'}}
            source={{
                uri: url,
                priority: priority
            }}
        />
    </WrapperComponent>
}

export default ImageAtom;