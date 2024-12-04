import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/index';
import RootNavigator from './src/router/rootNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      {/* <Example/> */}
      {/* <Todo />   */}
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
