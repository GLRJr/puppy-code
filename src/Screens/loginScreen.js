import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Image, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity } from 'react-native';
import {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import logo from './assets/logo.png'


export default function App() {
  const [mail, setMail]= useState('elena@sf.com');
  const [psswrd, setPsswrd]= useState('haduken');


  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    } }>
      
    <LinearGradient 
    style={styles.linearGradient}
    colors={['#ff9966','#ff5e62']}>
    

      <View style={styles.container}>                               
      <Image source={logo} style={{ width: 100, height: 100, marginBottom:30 }}/>   


      {/*input boxes*/}
      <TextInput 
      style={styles.input}
      placeholder="Email"
      onChangeText={(val) => setMail(val)}/>
      

      <TextInput 
      style={styles.input}
      placeholder="Password"
      onChangeText={(val) => setPsswrd(val)}/>
  

      <TouchableOpacity>
      <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginbutton}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.createquestion}> 
     Don't Have an Account?  
     <Text onPress={() =>
           {alert('Arf! Arf! We Gotcha!');}}
           style={styles.newsignup}> Sign Up!
     </Text> 
</Text>

      </View>



      


      <View style={styles.bottom}>
      <Text style={styles.words}>Slauson Technologies 2020</Text>
      </View>
    
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center' 
  },

  input: {
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    height: 50,
    width: 345
  },

  loginText: {
    fontSize: 20,
    color: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },

  createquestion: {
    color: '#f2f2f2',
    fontSize: 10,
  },
  newsignup: {
    color: '#f2f2f2',
    fontSize: 10,
    fontWeight:'bold',
  },

  forgot: {
      fontSize:11,
      color:'white',
      marginTop: 15
  },

  loginbutton:{
    width:"80%",
    backgroundColor: "#C8C8C8",
    borderRadius: 25,
    height: 50,
    alignItems:'center',
    marginTop: 40,
    marginBottom: 20

  },

  words: {
    fontSize: 10,
    color: '#f2f2f2',
  },
  bottom: {
    alignItems: 'center'

  },
});