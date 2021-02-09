import React, {useReducer} from "react";
import { Text, StyleSheet,Button, View } from "react-native";
import { Switch } from "react-native-gesture-handler";

const reducer=(state,action)=>{
 
  switch(action.valueChange){
   case'count':
        return {...state,count:state.count+action.amount};
   default:
     return state;}
}

const NumberEdit = () => {
  const[state,dispatch]=useReducer(reducer,{count:0});

  return(
      <View>
          <Button
          title="increase unit"
          onPress={()=>{
            dispatch({valueChange:'count',amount:1})
          }}
          />
          <Button
          title="decrease unit" 
            onPress={()=>{
              dispatch({valueChange:'count',amount:-1})
          }}
          />

       <Text>Current count : {state.count} </Text>


      </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default NumberEdit;