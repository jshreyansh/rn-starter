import React,{useState} from "react";
import { Text, StyleSheet,Button, View, ImageBackground } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";



const menu = () => {

    const[burger1,setburger1]=useState(0);
    const[burger2,setburger2]=useState(0);
    const[pizza1,setpizza1]=useState(0);
    const[pizza2,setpizza2]=useState(0);
    const[sum,setsum]=useState(0);
  
  return <View style={styles.view}>
      <Text style={styles.text}>VEG BURGER </Text>
      <Text style={styles.text}>Rs.60 🍔</Text>
      <Button
          title="+"
          style={styles.butt}
          onPress={()=>{
            setburger1(burger1+1);
            setsum(sum+60);
          }}
          />
          <Button
          title="-"
          style={styles.butt}
            onPress={()=>{
            setburger1(burger1-1);
            setsum(sum-60);
          }}
          />
       <Text>veg burger : {burger1} </Text>

       <Text style={styles.text}>NON-VEG BURGER 🍔+🥩</Text>
       <Text style={styles.text}>Rs.80</Text>
      <Button
          title="+"
          style={styles.butt}
          onPress={()=>{
            setburger2(burger2+1);
            setsum(sum+80);
          }}
          />
          <Button
          title="-"
          style={styles.butt}
            onPress={()=>{
            setburger2(burger2-1);
            setsum(sum-80);
          }}
          />
       <Text> NON-VEG burger : {burger2} </Text>

       <Text style={styles.text}>Veg pizza 🍕</Text>
       <Text style={styles.text}>Rs.120</Text>
      <Button
          title="+"
          style={styles.butt}
          onPress={()=>{
            setpizza1(pizza1+1);
            setsum(sum+120);
          }}
          />
          <Button
          title="-"
          style={styles.butt}
            onPress={()=>{
            setpizza1(pizza1-1);
            setsum(sum-120);
          }}
          />
       <Text>VEG pizza : {pizza1} </Text>

       <Text style={styles.text}>Non-Veg pizza 🍕+🥩</Text>
       <Text style={styles.text}>Rs.150</Text>
      <Button
          title="+"
          style={styles.butt}
          onPress={()=>{
            setpizza2(pizza2+1);
            setsum(sum+150);
          }}
          />
          <Button
          title="-"
          style={styles.butt}
            onPress={()=>{
            setpizza2(pizza2-1);
            setsum(sum-150);
          }}
          />
       <Text>Non-Veg pizza : {pizza2} </Text>

       
       <Text style={styles.text2}>total : {sum} </Text>

       <Button 

       
       onPress={()=>{
           if(sum>100)
           alert("Balance Insufficient")
           if(sum<50&&sum>0)
           alert("add more items you gareeb")
           if(sum===60||sum===80)
           alert("add more items you hungry stoner")
           if(sum<0)
           alert("High again😒😒")

        }}
       title="Check OUT"/>
       

        
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  text2: {
      fontSize:20,
 
  },
  view : {
      alignItems:"center"
  },
  butt:{
      alignItems:"flex-end",
      padding:10

  }
  
});

export default menu;