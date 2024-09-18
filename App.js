import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState, useRef } from 'react';
import { GestureHandlerRootView, NativeViewGestureHandler } from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import { captureRef } from 'react-native-view-shot';

import Button from './composant/Button';
import ImageViewer from './composant/ImageViewer';
import CircleButton from './composant/CircleButton';
import IconButton from './composant/IconButton';
import EmojiPicker from './composant/EmojiPicker';
import EmojiList from './composant/EmojiList';
import EmojiSticker from './composant/EmojiSticker';

const PlaceholderImg = require('./assets/images/background-image.png');

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [status, requestPermissionn] = MediaLibrary.usePermissions(); //Variable pour la permission
  const imageRef = useRef(); // zone de capture

  const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing : true,
        quality: 1,
      });

      if(!result.canceled){
        setSelectedImage(result.assets[0].uri);
        setShowAppOptions(true);
      }
      else{
        alert('You did not select any image');
      }
  };

  if(status === null){
    requestPermissionn();  //demander la permission pour acceder a la galerie et autres
  }

  const onReset = () => {
    setShowAppOptions(false)
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () => {
    try{
        const localUri = await captureRef(imageRef, {
              height : 440,
              quality : 1,
        });

        await MediaLibrary.saveToLibraryAsync(localUri);
        if(localUri){
          alert("Saved");
        }
    }
    catch(e){
          console.log(e);
    }
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageContainer}>
          <View ref={imageRef} collapsable={false}> {/*vue pour la capture */}
            <ImageViewer placeholderImageSource={PlaceholderImg} 
              selectedImage={selectedImage} />
              {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
         </View>
      </View>
      {showAppOptions ? (
        <View  style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
                <IconButton icon="refresh" label="Reset" onPress={onReset} />
                <CircleButton onPress={onAddSticker} />
                <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label='choose picture' onPress={pickImageAsync} />
          <Button label='use this picture' onPress={() => setShowAppOptions(true)} /> 
      </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose} >
          <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
