import { AppRegistry } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store/config/ConfigStore';

const store = configureStore();

const RNRedux = () => (
  <Provider store = {store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('dontpadplusplus', () => RNRedux);
