import React from 'react'
import LottieView from 'lottie-react-native';
import { StyleProp, ViewStyle } from 'react-native';
import WrapperComponent from '../../common/Wrapper';

type Lottie = 'location-on-pin'

export interface LottieExportType {
    name: Lottie;
    autoPlay?: boolean;
    loop?: boolean;
}

interface LottieArray {
    name: Lottie;
    source: any;
}

interface LottieProp {
    name: Lottie;
    autoPlay?: boolean;
    loop?: boolean;
    style: {
        wrapperStyle?: StyleProp<ViewStyle>;
        lottieStyle: StyleProp<ViewStyle>;
    };
}

const LottieComponent = ({name, autoPlay = true, loop = true, style}:LottieProp) => {
    const lottie:LottieArray[] = [{
        name: 'location-on-pin',
        source: require('../../../assets/animations/location-on-pin.json')
    }]
    return (
        <WrapperComponent
            style={style?.wrapperStyle}
            isCenter
        >
            <LottieView 
                style={style?.lottieStyle}
                source={lottie[0].source} autoPlay={autoPlay} loop={loop} />
        </WrapperComponent>
        
    )
}

export default React.memo(LottieComponent);