import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import Colors from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { FILTERCHARACTERS, SEARCHCHARACTERS } from '../../utils/routes';


export default function HeaderRight() {
    const navigation = useNavigation()
  return (
    <View style={styles.container} >
      <Pressable 
      onPress={() => navigation.navigate(SEARCHCHARACTERS)}
      style={styles.button}>
        <SearchNormal size={27} color={Colors.BLACK} />
      </Pressable>
      <Pressable 
      onPress={() => navigation.navigate(FILTERCHARACTERS)}
      style={styles.button}>
        <FilterSearch size={27} color={Colors.BLACK}  />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'flex-end',
        flex:1,
        alignItems:'center',
        marginHorizontal:5,

    },
    button:{
        marginHorizontal:5,
    },
})