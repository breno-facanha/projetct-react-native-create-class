import theme from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.COLORS.GRAY_600,
    },
    loading:{
        color: theme.COLORS.GREEN_700
    }
})  