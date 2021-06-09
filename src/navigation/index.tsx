import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/Intro/index';

const Navigation = () => {

    const Stack = createStackNavigator();

    return(
        <Stack.Navigator headerMode={
            'none'
        }>
            <Stack.Screen name="Intro" component={IntroScreen}/>
        </Stack.Navigator>
    )
}

export default Navigation;