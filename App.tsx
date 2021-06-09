/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StoryBookUIRoot from './storybook';
import Navigation from './src/navigation/index';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <StoryBookUIRoot/> */}
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </ThemeProvider>
    
  )
}

export default App;
