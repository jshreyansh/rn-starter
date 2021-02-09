import React, {useState} from "react";
import { Text, StyleSheet,View,Button,TextInput } from "react-native";



const Password = () => {
  
    const[pass,setPass]=useState('');

  return <View>
      <Text style={styles.text}> Enter credentials </Text>
      <TextInput 
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={pass}
        onChangeText={newVal=>setPass(newVal)}
      />
      <Text>Password : {pass}</Text>
      {pass.length<6?<Text>password must be longer than 5 characters</Text>:null}
  
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  } ,
  input :{
      margin :50,
      borderColor: 'black',
      borderWidth:1
  }
});

export default Password;
