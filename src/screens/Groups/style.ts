import { StyleSheet } from "react-native";
import  theme from "../../theme/index"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.COLORS.GRAY_600,
        alignItems: 'center'
    },
    text:{
        color: theme.COLORS.WHITE,
        fontSize: 32
    }
})