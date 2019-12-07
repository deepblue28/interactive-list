import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default class Task extends React.Component {

render(){
  return(
    <View key={this.props.keyval} style={styles.task} >

        <Text style={styles.taskNote}>{this.props.val.date}</Text> {/* DISPLAY FULL DATE ON PRESS */}
        <Text style={styles.taskNote}>{this.props.val.task}</Text>  {/* DISPLAY TEXT ON PRESS */}

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
            <Text style={styles.noteDeleteText}>X</Text> {/* DISPLAY DELETE ICON */}
        </TouchableOpacity>
    </View>

        );
    }

}

const styles = StyleSheet.create({
    task: {
      position: 'relative',
      padding: 20,
      paddingRight: 100,
      borderBottomWidth: 2,
      borderBottomColor: 'red',
    },
    
    taskNote: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#e91e63',
    },

    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2980b9',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText: {
        color: 'white',
    },
});