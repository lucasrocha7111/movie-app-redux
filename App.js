import React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './src/routes'
import { Provider } from 'react-redux'
import store from './src/store'

export class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          {MyStack()}
        </Provider>
      </NavigationContainer>
    )
  }
}

export default App;
