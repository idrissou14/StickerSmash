import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Button from './composant/Button';
import ImageViewer from './composant/ImageViewer';

const PlaceholderImg = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing : true,
        quality: 1,
      });

      if(!result.canceled){
        setSelectedImage(result.assets[0].uri);
      }
      else{
        alert('You did not select any image')
      }
  };
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text> */}
      <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImg} 
          selectedImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label='choose picture' onPress={pickImageAsync} />
        <Button label='use this picture' /> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex:1,
    paddingTop:58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
