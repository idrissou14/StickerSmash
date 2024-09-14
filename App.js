import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './composant/Button';
import ImageViewer from './composant/ImageViewer';

const PlaceholderImg = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text style={{ color: '#fff' }}>Open up App.js to start working on your app!</Text> */}
      <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={PlaceholderImg} />
      </View>
      <View style={styles.footerContainer}>
        <Button label='choose picture' />
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
