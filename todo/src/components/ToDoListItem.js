import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const ToDoListItem = ({item, handleToDoItemDone}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        borderWidth: 1,
        height: 60,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 5,
      }}>
      <View
        style={{
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          width: '75%',
        }}>
        <Text style={{fontSize: 18}}>{item.name}</Text>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => handleToDoItemDone(item.id)}
          style={{
            borderRadius: 25,
            backgroundColor: `${item.done ? 'green' : 'red'}`,
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>
  );
};

export default ToDoListItem;
