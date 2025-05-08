import { View } from "react-native";
import { styles } from "./style";
import { ActivityIndicator } from 'react-native';
import theme from "@theme/index";

export function Loading(){
    return (
        <View style={styles.container}>
            <ActivityIndicator color={styles.loading.color} size={"large"}/>
        </View>
    )
}