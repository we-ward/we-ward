/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;

import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Nav from './Nav';
import {
    AppRegistry
} from 'react-native';

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
