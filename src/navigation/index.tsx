import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from '../screens/Intro/index';
import DistrictScreen from '../screens/district/index';
import PhoneAuthScreen from '../screens/Auth/Phone/index';
import { useAuthState } from '../contexts/AuthContext';

const Navigation = () => {

    const Stack = createStackNavigator();
    const state = useAuthState();

    const AuthStack = () => (
        <Stack.Navigator headerMode={
            'none'
        }>
            <Stack.Screen name="Intro" component={IntroScreen} />
            <Stack.Screen name="District" component={DistrictScreen}/>
            <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen}/>
        </Stack.Navigator>
    )

    return(
        <Stack.Navigator headerMode={
            'none'
        }>
            {
                state.isSignIn ? (
                    <Stack.Screen name="Home" component={IntroScreen}/>
                ) : (
                    <Stack.Screen name="Auth" component={AuthStack}/>
                )
            }            
        </Stack.Navigator>
    )
}

export default Navigation;