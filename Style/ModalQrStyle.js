import { StyleSheet } from "react-native";

export const ModalQrStyle = StyleSheet.create({
    BodyContainer:{
        flex: 1,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Container: {
        // borderWidth: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        height: '30%',
        paddingHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'white'

    },
    ContainerBtns:{
        gap: 10,
        width: '100%'
    },
    BtnModalClose:{
        borderWidth: 0,
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#adb5bd',
    },
    BtnCopyContentQR:{
        borderWidth: 0,
        padding: 10,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f7a8c',
    },
    TextbtnModalCopy:{
        color: 'white',
    },
    TextbtnModalClose:{
        color: 'white',
    },
    TextInfo:{
        fontSize: 16,
    },
});