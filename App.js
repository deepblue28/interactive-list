import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';

import * as firebase from 'firebase';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClYo3mS5GbLdDBP92vUN-DeyiIrDnDgy4",
    authDomain: "interactive-todo.firebaseapp.com",
    databaseURL: "https://interactive-todo.firebaseio.com",
    projectId: "interactive-todo",
    storageBucket: "interactive-todo.appspot.com",
    messagingSenderId: "768330931029",
    appId: "1:768330931029:web:e154e6628a57bf04012ddc",
    measurementId: "G-L72N7J43H9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
