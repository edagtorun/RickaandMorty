import {View, Text, StyleSheet, Alert} from 'react-native';
import React from 'react';
import CustomButton from './customButton';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/actions/todoActions';

export default function TodoItem({item}) {
   const dispatch =  useDispatch()
  const deleteItem = () => {
    Alert.alert('Sil', 'Bu elemanu silmek istediginize emin misiniz?', [
      {
        text: 'No',
        onPress: () => console.log('Cansel Press'),
      },
      {
        text: 'Yes',
        onPress: () => dispatch(removeItem(item)),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 2, justifyContent: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '600'}}>{item.title}</Text>
        <Text style={{fontSize: 14, color: 'gray'}}>id:{item.id}</Text>
      </View>
      <View style={{flex: 1}}>
        <CustomButton
          onPress={() => deleteItem()}
          title="Remove"
          color="#dc2928"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderColor: '#cccccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 20,
  },
});
