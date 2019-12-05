import React from 'react';
import { StyleSheet, Text, View, StatusBar, ListView } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List ,ListItem} from 'native-base';

import * as firebase from 'firebase';
import { randomUI12 } from 'uuid-js';


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
  
    var data = ["Blue","Red","Green"]

export default class App extends React.Component {

  constructor(props){
    super(props);

      this.lv = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})

     this.state = {
       ListView: data,
       newContact: ""
     }
  }

 render() {
  return (
  <Container style={styles.container}>
    <Header style={{ marginTop: StatusBar.currentHeight }}>
      <Content>
        <Item>
          <Input placeholder="add task"/>
          <Button>
            <Icon name="add"/>
          </Button>
        </Item>
      </Content>
    </Header>

    <Content>
      <List dataSource={this.lv.cloneWithRows(this.state.ListViewData)} 
      renderRow = {data=>
         <ListItem>
           <Text> {data} </Text>
         </ListItem>
      }
      /> 
    </Content>

   
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
