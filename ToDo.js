import React from 'react';
import { FlatList,StyleSheet, Platform, Button, Image, TextInput, Text, View, ScrollView } from 'react-native';
import firebase from 'react-native-firebase';
//import firebase from '@react-native-firebase/app';

import Todoj from './ToDoj'; // we'll create this next
class Todo extends React.Component {
  constructor() {
    super();
   this.ref = firebase.firestore().collection('todos');
    this.unsubscribe = null;

    this.state = {
        textInput: '' ,
        loading: true,
        todos: [],
    };
  }
  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate)
}

onCollectionUpdate = (querySnapshot) => {
  const todos = [];
  querySnapshot.forEach((doc) => {
    const { title, complete } = doc.data();

    todos.push({
      key: doc.id,
      doc, // DocumentSnapshot
      title,
      complete,
    });
  });

  this.setState({
    todos,
    loading: false,
 });
}

componentWillUnmount() {
    this.unsubscribe();
}

onCollectionUpdate = (querySnapshot) => {
  const todos = [];
  querySnapshot.forEach((doc) => {
    const { title, complete } = doc.data();

    todos.push({
      key: doc.id,
      doc, // DocumentSnapshot
      title,
      complete,
    });
  });

  this.setState({
    todos,
    loading: false,
 });
}

  addTodo() {
   this.ref.add({
     title: this.state.textInput,
     complete: false,
   });

   this.setState({
     textInput: '',
   });
 }

  updateTextInput(value) {
    this.setState({ textInput: value });
  }


  render() {
    if (this.state.loading) {
    return null; // or render a loading icon
  }

  return (
    <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.todos}
          renderItem={({ item }) => <Todoj {...item} />}
        />
        <TextInput
            placeholder={'Add TODO'}
            value={this.state.textInput}
            onChangeText={(text) => this.updateTextInput(text)}
        />
        <Button
            title={'Add TODO'}
            disabled={!this.state.textInput.length}
            onPress={() => this.addTodo()}
        />
    </View>
  );
  }


}

export default Todo;
