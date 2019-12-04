import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon} from 'native-base';

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
    <Container style={styles.container}>
      <Header style={{marginTop: StatusBar.currentHeight}}>
        <Content>
         <Item>
          <Input placeholder="Add task"/>
          <Button>
            <Icon name="add"/>
          </Button>
        </Item>
        </Content>
      </Header>
    </Container>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
