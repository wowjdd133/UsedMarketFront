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

import StoryBookUIRoot from './storybook';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StoryBookUIRoot/>
    </ThemeProvider>
    
  )
}

export default App;
