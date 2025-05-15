import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";

export const AppStyle = StyleSheet.create({
    Top:{
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center',
    }
})