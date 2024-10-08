import { StyleSheet, Text, View, Image , Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconButton({onPress, label, icon}) {
    return(
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color= "#fff" />
            <Text style={styles.iconButtonLabel} >{label}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconButtonLabel: {
      color: '#fff',
      marginTop: 12,
    },
  });