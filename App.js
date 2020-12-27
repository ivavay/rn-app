import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image} from 'react-native';
import Constants from 'expo-constants';

const App = () =>{
  console.log([Constants], Constants);
  const {deviceName} = Constants;
  function showAlert(){ 
    console.log("Clicked!")
    // alert("Clicked!")
    Alert.alert(
      "My Books",
      "Your book has been selected",
      [
        {
          text: "OK",
          onPress: () => console.log("Pressed"),
          
        }
      ]
    )
  }

  
   //JSX
  return (
    <View style = {styles.block}>
      <Image 
        style ={styles.img}
        source = {require("./assets/image1.png")}
      />
      <Text style = {styles.title}>
        Hello {deviceName}
      </Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Button 
        onPress = {showAlert}
        title = "Learn more"
      
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 120, 
    height: 120,

  },
  block: {
    paddingTop: 50, 
    backgroundColor: "white",
    flex: 1, //change the background from the size of text to the entie screen 
    alignItems: "center", // align horizontally 
    justifyContent: "center"
  }, 
  title: {
    fontSize: 30,
    color: "blue"
  }
})
export default App; 

