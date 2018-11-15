/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import{Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import AppNavigation from './src/shared/Router';
import homepage from './src/view/homepage';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk) );
    return(
      <Provider store = {store}>
        <AppNavigation/>
      </Provider>
    )
  }
}

export default App 
 



