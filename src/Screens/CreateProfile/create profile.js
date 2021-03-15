import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, TextInput, Image, TouchableWithoutFeedback, Keyboard, View, TouchableOpacity, ScrollView } from 'react-native';
// import LinearGradient from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles.js'
//import  Constants from 'expo-constants';
//import mhcat from './assets/mhcat.jpeg'


// export default function App() {

  export default function ImagePickerExample() {
    const [image, setImage] = useState(null);
    const [prepVideo, setPrepVideo] = useState(null);
  
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    const pickPrepVideo = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setPrepVideo(result.uri);
      }
    };



  return (
    <TouchableWithoutFeedback onPress={() =>{
      Keyboard.dismiss();
    } }>
      
    {/* <LinearGradient 
    style={styles.linearGradient}
    colors={['#f64f59','#c471ed','#12c2e9']}> */}

      <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                style={styles.profilebutton} 
                onPress={pickImage}>
                    <Image 
                        style={styles.profileImageContainer}
                        source={{ uri: image }} />
                </TouchableOpacity>
          </View>

          <View style={styles.footer}>
          <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}>
              <TextInput 
                  style={styles.inputTextBox}
                  placeholder="Enter Breed"
                  onChangeText={(val) => setMail(val)}/>

              <TextInput 
                  style={styles.inputTextBox}
                  placeholder="Enter dry Food"
                  onChangeText={(val) => setMail(val)}/>

              <TextInput 
                  style={styles.inputTextBox}
                  placeholder="Enter wet Food"
                  onChangeText={(val) => setMail(val)}/>

              <TextInput 
                  style={styles.inputTextBox}
                  placeholder="Enter Preparation Instructions"
                  onChangeText={(val) => setMail(val)}/>

              <Text style={styles.videoask}>Upload a Video of Prep Instructions</Text>

              <TouchableOpacity
                style={styles.prepVideoContainer} 
                onPress={pickPrepVideo}>
                    <Image 
                        style={styles.prepVideoContainer}
                        source={{ uri: prepVideo }} />
              </TouchableOpacity>

              <TextInput 
                  style={styles.inputTextBox}
                  placeholder="Vetanary Hospital/ Doctor"
                  onChangeText={(val) => setMail(val)}/>

              <TextInput 
                  style={styles.inputTextBox}
                  placeholder="Vaccinations"
                  onChangeText={(val) => setMail(val)}/>

              <TextInput 
                  style={styles.inputTextBox}
                  placeholder="Allergies"
                  onChangeText={(val) => setMail(val)}/>
           </ScrollView>   
          </View>
      </View>
    
    {/* </LinearGradient> */}
    </TouchableWithoutFeedback>
  );
}

