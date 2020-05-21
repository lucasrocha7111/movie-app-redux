import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/routes'

export class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        {MyStack()}
      </NavigationContainer>
    )
  }
}

export default App;
