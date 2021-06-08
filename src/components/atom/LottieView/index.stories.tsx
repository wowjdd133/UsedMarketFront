import React from 'react';
import { storiesOf } from '@storybook/react-native';

import LottieView from './index';

storiesOf('LottieView', module)
    .add('location-on-pin', () => <LottieView name="location-on-pin" style={{
        lottieStyle: {
            width: '100%'
        }
    }}/>)
    .add('location-on-pin-medium', () => <LottieView name="location-on-pin" style={{
        lottieStyle: {
            width:'75%'
        }
    }} />)
    .add('location-on-pin-small', () => <LottieView name="location-on-pin" style={{
        lottieStyle: {
            width:'50%'
        }
    }} />)
