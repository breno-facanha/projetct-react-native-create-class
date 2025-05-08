import theme from "@theme/index";
import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%' ,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    logo: {
        width: 46,
        height: 55,
    },
    buton:{
        flex: 1
    },
    backIcon: {
        color: theme.COLORS.WHITE,
    }
})