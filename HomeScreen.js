import React from "react";
import { Text, StyleSheet,View,Button } from "react-native";

const HomeScreen = props => {
  
  return <View style={styles.view1}>
  <Text style={styles.text}>Practice projects library</Text>;
  <Button 
  onPress={()=> props.navigation.navigate('List') }
  title="Go to list demo"/>
  <Button 
  onPress={()=> props.navigation.navigate('NumberEdit') }
  title="Go to number edit"/>
    <Button 
  onPress={()=> props.navigation.navigate('AddColor') }
  title="Go to Add color"/>
   <Button 
  onPress={()=> props.navigation.navigate('AdjustColor') }
  title="Go to Adjust color"/>
  <Button 
  onPress={()=> props.navigation.navigate('Zomato') }
  title="Go to zommato lite"/>
  <Button 
  onPress={()=> props.navigation.navigate('Password') }
  title="Welcome! enter your password please"/>
  <Button 
  onPress={()=> props.navigation.navigate('Box')}
  title="Welcome! you are about to enter in styling world"/>
  <Button 
  onPress={()=> props.navigation.navigate('Search') }
  title="Welcome! to swiggy lite"/>
  <Button 
  onPress={()=> props.navigation.navigate('slot') }
  title="Welcome! to slot machine"/>
   <Button 
  onPress={()=> props.navigation.navigate('wheel') }
  title="Welcome! to spin the wheel machine"/>


  </View>
};

const styles = StyleSheet.create({
  view1: {
    fontSize: 30,
    
    justifyContent:"space-between" ,
    
   
 
  },
  text :{
    alignItems:"center",
    fontSize:50
  }
});

export default HomeScreen;
