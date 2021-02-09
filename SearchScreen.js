import React,{useState} from "react";
import { Text, StyleSheet,View,Button } from "react-native";
import SearchBar from '../components/searchBar';



const SearchScreen = () => {
  const[term,setTerm]=useState('');
  return <View >
      
      <SearchBar 
      term={term} 
      onTermChange={(newTerm)=>setTerm(newTerm)} 
      onTermSubmit={()=>console.log("it worked")}
      />
      <Text>{term}</Text>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  

});

export default SearchScreen;
