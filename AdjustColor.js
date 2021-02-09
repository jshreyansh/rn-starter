import React,{useState} from "react";
import { Text, StyleSheet,View,Button,FlatList } from "react-native";
import SquareColor from '../components/SquareColor';

const AdjustColor = () => {
    const[red,setRed]=useState(0);
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
  return <View>
    <SquareColor 
    onIncrease={()=>setRed(red+15)}
    onDecrease={()=>setRed(red-15)} 
    color="red"/>
    <SquareColor 
    onIncrease={()=>setGreen(green+15)}
    onDecrease={()=>setGreen(green-15)} 
    color="green"/>
    <SquareColor 
    onIncrease={()=>setBlue(blue+15)}
    onDecrease={()=>setBlue(blue-15)} 
    color="blue"/>

<View style={{height:100,width:1400,backgroundColor:`rgb(${red},${green},${blue})`}} />
    

  </View>
};




const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  align:{
    margin:'auto',
    height:100,
    width:100,
    border:'3px solid black'
  }
 
});

export default AdjustColor;
