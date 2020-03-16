import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'Shaun', id: '1'},
    {name: 'Mario', id: '2'},
    {name: 'Lugi', id: '3'},
    {name: 'Toad', id: '4'},
    {name: 'Bowser', id: '5'},
    {name: 'Peach', id: '6'},
    {name: 'Daysi', id: '7'},
    {name: 'Bowser Jr', id: '8'},
  ]);

  const pressHandler = (id) => {
    console.log(id);

    setPeople((prevPeople) => {
      return prevPeople.filter(
        person => person.id != id
      );
    });
  }

  return (
    <View style = {styles.container}>
      
      <FlatList
        numColumns = {2}
        keyExtractor = {(item) => item.id}
        data = {people}
        renderItem = {({ item }) => (

          <TouchableOpacity 
            onPress = {() => pressHandler(item.id)}
          >
            <Text style = {styles.item}>
              {item.name}
            </Text>
          </TouchableOpacity>

        )}
      
      />
      
      {/* <ScrollView>
      
        {people.map((item) => {
          return (
            <View key = {item.key}>
              <Text style = {styles.item}>
                {item.name}
              </Text>
            </View>
          );
        })}

      </ScrollView> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20

    // alignItems: 'center',
    // justifyContent: 'center',
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 20
  }

});
