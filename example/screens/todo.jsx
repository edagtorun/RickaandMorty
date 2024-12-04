import {View, Text, SafeAreaView, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/customButton';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from '../store/actions/todoActions';
import TodoItem from '../components/TodoItem';

export default function Todo() {
  const [newTodo, setNewTodo] = useState('todo');
  const dispatch = useDispatch();
  const {todoList} = useSelector(state => state.todo);
  return (
    <SafeAreaView>
      <View>
        <TextInput
          onChangeText={text => setNewTodo(text)}
          placeholder="Todo title"
          style={{
            backgroundColor: '#f2f2f2',
            height: 50,
            fontSize: 18,
            paddingHorizontal: 5,
            margin: 10,
            borderRadius: 5,
          }}
        />
        <CustomButton
          onPress={() =>
            dispatch(
              addItem({
                id: todoList.length + 1 ,
                title: `${newTodo}`,
              }),
            )
          }
          title="Add Todo"
          color="#017ec7"
        />
      </View>
      <View>
        <FlatList data={todoList} renderItem={({item}) => <TodoItem item={item}/>}/>
      </View>
    </SafeAreaView>
  );
}
