import React from "react";
import { Text, StyleSheet,View,Button } from "react-native";



const SquareColor = ({color,onIncrease,onDecrease}) => {
  
  return <View>
      <Text> {color} </Text>
      <Button 
      onPress={()=>onIncrease()}
      title={`increase ${color}`}
      />
      <Button 
      onPress={()=>onDecrease()}
      title={`decrease ${color}`}
      />
  
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SquareColor;
