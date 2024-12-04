import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../components/customButton'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, resetCount } from '../store/actions/counterActions'

export default function Example() {
  const dispatch = useDispatch();
  const {count} = useSelector(state => state.counter)
  return (
    <SafeAreaView style={{flex:1}}> 
     <View style={styles.container}>
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:50, fontWeight:'600'}}>{count}</Text>
        </View>
        <View style={{flex:1, justifyContent:'flex-end', padding:10}}>
        <CustomButton onPress={()=> dispatch(incrementCount())} title="INCREMENT" color="blue"/>
        <CustomButton onPress={()=> dispatch(decrementCount())} title="DECREMENT" color="orange"/>
        <CustomButton onPress={()=> dispatch(resetCount())} title="RESET" color="red"/>
     </View>
     </View>
    
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffff',
        flex:1,
    },

})