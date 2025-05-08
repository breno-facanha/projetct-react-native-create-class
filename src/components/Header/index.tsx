import { Image, View } from "react-native";
import { styles } from "./style";
import logoPng from "@assets/Logo.png"

export function Header(){
    return(
        
        <View>
            <Image source={logoPng}></Image>
        </View>
        
    )
}