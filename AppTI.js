import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Shaun');
  const [person, setPerson] = useState({
    name: 'Mario',
    age: 40
  });

  const [iname, setIname] = useState('Johnny');
  const [iage, setIage] = useState('30');

  const clickHandler = () => {
    setName('Chun-li');
    setPerson({
      name: 'Luigi',
      age: 35
    })
  }



  return (
    <View style = {styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.boldText}>
          My name is: {name} 
        </Text>
        <Text>
          His name is {person.name} and his age is {person.age}
        </Text>

        <View style = {styles.buttonContainer}>
          <Button 
            title = 'Click me!'
            onPress = {clickHandler}
          />
        </View>

      </View>

      <View style = {styles.body}>
        <Text>Enter the name: </Text>
        <TextInput
          style = {styles.input}
          placeholder = 'e. John Doe'
          onChangeText = {(val) => setIname(val)}
        />


        <Text>Enter the age: </Text>
        <TextInput
          style = {styles.input}
          placeholder = 'e. 18'
          keyboardType = 'numeric'
          onChangeText = {(val) => setIage(val)}
        />

        <Text>Name: {iname} Age: {iage}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: 'pink',
    padding: 20,
  },

  boldText: {
    fontWeight: 'bold'
  },

  body: {
    backgroundColor: 'yellow',
    padding: 30
  },

  buttonContainer: {
    marginTop: 20,

  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  
  }

});
