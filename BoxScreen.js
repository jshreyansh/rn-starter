import React, {useState} from "react";
import { Text, StyleSheet,View,Button,TextInput } from "react-native";



const Box = () => {
  
   

  return <View style={styles.View}>
      <Text style={styles.text}>Box Screen</Text>
      <Text style={styles.text}>Box Screen2</Text>
      <Text style={styles.text}>Box Screen3</Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    borderWidth:1,
      borderColor:'red',
      margin:20,
      alignItems:"flex-start",
      padding:20
      
  } ,
  View :{
      borderWidth:1,
      borderColor:'black',
      flexDirection:"row"
  }
});

export default Box;
