import { Text, View } from "react-native";
import { styles } from "./style"
import { Header } from "@components/Header";

export function Groups(){
    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.text}>Groups</Text>
        </View>
    )
}
