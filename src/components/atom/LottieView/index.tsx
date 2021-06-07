import React from 'react'
import LottieView from 'lottie-react-native';
import { StyleProp, ViewStyle } from 'react-native';

type Lottie = 'location-on-pin'

interface LottieArray {
    name: Lottie;
    source: any;
}

interface LottieProp {
    name: Lottie;
    autoPlay?: boolean;
    loop?: boolean;
    style?: StyleProp<ViewStyle>;
}

const LottieComponent = ({name, autoPlay, loop, style}:LottieProp) => {
    const lottie:LottieArray[] = [{
        name: 'location-on-pin',
        source: require('../../../assets/animations/location-on-pin.json')
    }]
    return <LottieView 
        style={style}
        source={lottie[0].source} autoPlay loop />
}

export default LottieComponent;