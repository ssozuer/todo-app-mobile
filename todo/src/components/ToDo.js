import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import ToDoListItem from './ToDoListItem';

const ToDo = () => {
  const [idCounter, setIdCounter] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(null);

  useEffect(() => {}, [items]);

  const handleAddItemClick = () => {
    if (item === null) {
      return;
    }

    setItems((prev) => [{id: idCounter, name: item, done: false}, ...prev]);
    setItem(null);
    setIdCounter(idCounter + 1);
  };

  const renderItems = () => {
    return items.map((i) => {
      return (
        <ToDoListItem
          handleToDoItemDone={handleToDoItemDone}
          item={i}
          key={i.id}
        />
      );
    });
  };

  const handleToDoItemDone = (itemId) => {
    const itemIndex = items.findIndex((i) => i.id === itemId);
    items[itemIndex].done = !items[itemIndex].done;
    setItems((prev) => [...items]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <TextInput
          onChangeText={(value) => setItem(value)}
          value={item}
          placeholder={'todo item...'}
          style={{
            borderBottomWidth: 2,
            borderColor: '#009788',
            width: '100%',
            paddingLeft: 150,
          }}
        />
      </View>

      <View
        style={{
          flex: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ScrollView>{renderItems()}</ScrollView>
      </View>

      <TouchableOpacity
        onPress={handleAddItemClick}
        style={{
          width: '100%',
          backgroundColor: '#009788',
          height: 60,
          flex: 1,
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white', fontSize: 24}}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ToDo;
