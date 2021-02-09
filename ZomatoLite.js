import React from "react";
import { Text, StyleSheet,Button, View, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";



const ZomatoLite = props => {
  
  return <View>
        <Text style={styles.text}>Welcome to Zomato lite </Text>
        <Button 
        title="Burger king menu"
        onPress={()=> props.navigation.navigate('Menu') }
        />
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
  
});

export default ZomatoLite;