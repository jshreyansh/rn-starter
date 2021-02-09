import React,{useState} from "react";
import { Text, StyleSheet,View,Button,FlatList } from "react-native";

const AddColor = () => {
    const[color,setColor]=useState([]);
  return <View>
  <Button 
  onPress={()=> {
      setColor([...color,RandomRgb()])
  } }
  title="Add color"
  />
  <View style={{height:100,width:100,backgroundColor:RandomRgb()}}/>
  <FlatList
        horizontal
        data={color}
        renderItem={({item})=>{
        return <View style={{height:100,width:100,backgroundColor:RandomRgb()}}/> ;
        }
    }
    />

  </View>
};

const RandomRgb=()=>{
  let red=Math.floor(Math.random()*256);
  let green=Math.floor(Math.random()*256);
  let blue=Math.floor(Math.random()*256);

  return `rgb(${red},${green},${blue})`;

}


const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default AddColor;
