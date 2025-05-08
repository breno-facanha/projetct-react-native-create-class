import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import logoPng from "@assets/Logo.png"
import { CaretLeft} from "phosphor-react-native"

type Props = {
    showBackButton?: boolean
}

export function Header({showBackButton = false}: Props){
    return(
        
        <View style={styles.container}>
            {showBackButton && 
                <TouchableOpacity style={styles.buton}>
                    <CaretLeft color={styles.backIcon.color} size={32}/>
                </TouchableOpacity>
            }
            <Image source={logoPng} width={46} height={55}></Image>
        </View>
        
    )
}