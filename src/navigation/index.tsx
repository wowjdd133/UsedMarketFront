import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/Intro/index';
import DistrictScreen from '../screens/district/index';

const Navigation = () => {

    const Stack = createStackNavigator();

    const DistrictStack = () => (
        <Stack.Navigator headerMode={
            'none'
        }>
            <Stack.Screen name="District" component={DistrictScreen}/>
        </Stack.Navigator>
    )

    return(
        <Stack.Navigator headerMode={
            'none'
        }>
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="District" component={DistrictStack} />
        </Stack.Navigator>
    )
}

export default Navigation;