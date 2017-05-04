console.disableYellowBox = true;

// import { Provider } from 'react-redux';
// import React, { Component } from 'react';
// import Nav from './Nav';
// import { AppRegistry } from 'react-native';
//
// import * as firebase from 'firebase';
//

//
// export default class weward extends Component {
//     render() {
//         return (
//             <Provider>
//                 <Nav />
//             </Provider>
//         );
//     }
// }

import React, {Component} from 'react';
import ReactNative from 'react-native';
const firebase = require('firebase');
const StatusBar = require('./dummy/StatusBar');
const ActionButton = require('./dummy/ActionButton');
const ListItem = require('./dummy/ListItem');
const styles = require('./dummy/styles.js')

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = ReactNative;

const firebaseConfig = {
  apiKey: "AIzaSyDs-MTj9PX6NOFWT9-Cy09F-Tx9UyBHMag",
  authDomain: "dummy-e994e.firebaseapp.com",
  databaseURL: "https://dummy-e994e.firebaseio.com",
  projectId: "dummy-e994e",
  storageBucket: "dummy-e994e.appspot.com",
  messagingSenderId: "426835810504"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class weward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        <ActionButton onPress={this._addItem.bind(this)} title="Add" />

      </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

}

AppRegistry.registerComponent('weward', () => weward);
