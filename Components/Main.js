import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import Task from './Task';
export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          noteArray: [],
          noteText: '',
        }
    }

render() {
    {/*PASS VALUES FOR ADD & DELETE*/}

    let notes = this.state.noteArray.map((val, key) => {
        return <Task key={key} keyval={key} val={val}
        deleteMethod={ ()=> this.deleteNote(key) } />
});


  return(
    <View style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>What needs to be done</Text>
      </View>
        
        <ScrollView style={styles.scrollContainer}>
            {notes}
        </ScrollView>
     
        <View style={styles.footer}>
            
        {/*INPUT BUTTON ON PRESS*/}

            <TextInput style={styles.contentFooter}
                onChangeText={(noteText) => this.setState({noteText})}
                value={this.state.noteText}
                placeholder='>note'
                placeholderTextColor='white'
                underlineColorAndroid='transparent'>
            </TextInput>
        </View>

        {/*ACTIVATE BUTTON ON PRESS*/}
        <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
            <Text style={styles.Add}>+</Text>
        </TouchableOpacity>
    </View>

        );
    }
    // ADD NOTES BUTTON FUNCTION
        addNote(){
           if (this.state.noteText) {
               var X = new Date();
               this.state.noteArray.push({
                  'date': X.getFullYear() +
                  "/" + (X.getMonth() + 1) +
                  "/" + X.getDate(),
                  'task': this.state.noteText
               });
               this.setState({ noteArray: this.state.noteArray })
               this.setState({ noteText: '' });
           }
        }
    // DELETE NOTES BUTTON FUNCTION
      deleteNote(key) {
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray })
    }
}

const styles = StyleSheet.create({
    container: {
            flex: 1,

        },

        header: {

            backgroundColor: '#4a69bd',

            justifyContent: 'center',

            alignItems: 'center',

            // borderBottomWidth: 10,

            // borderBottomColor: '#ddd',

        },

        headerText: {

            color: 'white',

            fontSize: 18,

            padding: 26,

        },

        scrollContainer: {

            flex: 1,

            marginBottom: 100,

        },
  
    footer: {

        position: 'absolute',

        bottom: 0,

        left: 0,

        right: 0,

        zIndex: 10,

    },
  
    contentFooter: {

        alignSelf: 'stretch',

        color: '#fff',

        padding: 20,

        backgroundColor: '#252525',

        borderTopWidth: 2,

        borderTopColor: '#ededed',

    },
  
    addButton: {

        position: 'absolute',

        zIndex: 11,

        right: 20,

        bottom: 90,

        backgroundColor: '#1e3799',

        width: 90,

        height: 90,

        borderRadius: 50,

        alignItems: 'center',

        justifyContent: 'center',

        elevation: 8,

    },
  
    Add: {

        color: 'white',

        fontSize: 24,

    },
  
    note: {

        position: 'relative',

        padding: 20,

        paddingRight: 100,

        borderBottomWidth: 2,

        borderBottomColor: '#4a69bd',

    },
  
  noteText: {

      paddingLeft: 20,
      
      borderLeftWidth: 10,

      borderLeftColor: '#1e3799',

  },
  
  noteDelete: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#b71540',
      padding: 10,
      top: 10,
      bottom: 10,
      right: 10
  },
  
  noteDeleteText: {
  
      color: 'white',
  }
  

});


 

