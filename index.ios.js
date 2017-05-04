/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;

import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Nav from './Nav';
import { AppRegistry } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB8MNYp0Y5U6FztmjVWzILaPnYdKqntPN0",
    authDomain: "we-ward-872a3.firebaseapp.com",
    databaseURL: "https://we-ward-872a3.firebaseio.com",
    projectId: "we-ward-872a3",
    storageBucket: "we-ward-872a3.appspot.com",
    messagingSenderId: "745916231980"
  };

const  firebaseApp = firebase.initializeApp(firebaseConfig);

export default class weward extends Component {
    render() {
        return (
            <Provider>
                <Nav />
            </Provider>
        );
    }
}


AppRegistry.registerComponent('weward', () => weward);
