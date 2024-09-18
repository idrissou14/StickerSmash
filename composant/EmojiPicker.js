import { StyleSheet, Text, View, Image , Pressable, Modal} from 'react-native';
import  MaterialIcons  from '@expo/vector-icons/MaterialIcons';

export default function EmojiPicker({ isVisible, children, onClose }){
    return(
        <Modal visible={isVisible} animationType='slide' transparent>
            <View style={styles.modalContent}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Choose a Sticker</Text>
                    <Pressable style={styles.closeButton} onPress={onClose}>
                        <MaterialIcons name='close' size={22} color='white' />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContent: {
      height: '25%',
      width: '100%',
      backgroundColor: '#25292e',
      borderTopRightRadius: 18,
      borderTopLeftRadius: 18,
      position: 'absolute',
      bottom: 0,
    },
    titleContainer: {
      height: '16%',
      backgroundColor: '#464C55',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 16,
    },
  });
  