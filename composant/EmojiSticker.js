import { Image,View } from "react-native-web";

export default function EmojiSticker({ imageSize, stickerSource }){
    return(
        <View style={{ top: -30 }}>
            <Image 
                source={stickerSource}
                resizeMode="content"
                style={{ width: imageSize, height: imageSize }}
            />
        </View>
    );
}