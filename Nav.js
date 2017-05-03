import { StackNavigator, TabNavigator } from 'react-navigation';
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

const FakeComponent = () => {
    return (
        <View>
            <Text>
                hi meow meow
            </Text>
        </View>
    );
};


const Tabs = TabNavigator({
    Groups: {
        screen: FakeComponent
    },
    Profile: {
        screen: FakeComponent
    },
});

export default Nav = StackNavigator({
    Tabs: {
        screen: Tabs
    }

});