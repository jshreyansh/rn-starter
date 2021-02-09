import React,{useState,useEffect} from "react";
import { Text, StyleSheet,Button, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import api from "../api/api"

const ListScreen = () => {

  const[result,setResult]=useState([]);

  const search=async ()=>{
  const response=await api.get('/posts');
  setResult(response.data);
  console.log(response.data);
  };

 useEffect(()=>{
  search();
 },[]);

 return (
  <View>
    <p>length : {result.length}</p>
    <FlatList
    keyExtractor={(id)=>result.id}
    data={result}
    renderItem={({item})=>{
   // return<Text> id:  {item.id}  title : {item.title} </Text>;
       }
     }
   />
  </View>
 ); 
} 
    

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    
  }
});

export default ListScreen;