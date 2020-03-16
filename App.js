import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/header';
import TodoItem from './components/todo-item';
import AddTodo from './components/add-todo';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'Buy a laptop', key: '1'},
    {text: 'Sleep', key: '2'},
    {text: 'Eat a fruit', key: '3'},
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(
        todo => todo.key != key
      );
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: (prevTodos.length + 1 ).toString()},
        ...prevTodos
      ]
    })
  }

  return (
    <View style = {styles.container}>
      {/* Header */}
      <Header/>
      {/* Content */}
      <View style = {styles.content}>

        {/* Form */}
        <AddTodo submitHandler = {submitHandler} />

        <View style = {styles.list}>
          <FlatList
            data = {todos}
            renderItem = {({ item }) => (
              <TodoItem  item = {item} pressHandler = {pressHandler}/>
            )}
          />
        </View>

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },

  list: {
    marginTop: 10,
  }

});
