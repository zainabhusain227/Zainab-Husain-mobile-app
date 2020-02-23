import React, { Component } from 'react';
import {Image, Alert,Button, Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});
import me from './assets/me.jpg'; 
import { apisAreAvailable } from 'expo';


export default class App extends Component {

  render() {

    Alert.alert('Welcome', 'to Pigpocket App!',[
      {text:'okay',onPress:() => console.log('alert closed')}
    ])

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hi, I'm Zainab!</Text>
        <Image source={me} style={{resizeMode: 'cover', width: 305, height: 159 }} /> 
        <Text style={styles.instructions}>I'm a Junior at McMaster University. My hobbies include reading, painting and playing my ukelele. I also love travelling so I'm super excited to learn some financial tips if given the chance to work at Pigpocket!
         </Text>
         <Button
          color="#FFC980"
          title="Press me"
          onPress={() => Alert.alert('Thanks for pressing!')}
        />
      </View>
    );
    

    


  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFEFDF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
