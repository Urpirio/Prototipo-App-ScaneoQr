import { StyleSheet } from "react-native";

export const CamaraStyle = StyleSheet.create({
    CamaraView: {
        flex: 1,
        width: '100%',
    },
    ContainerBtnCamara:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
        flexDirection: 'row',
        gap: 10,
    },
    BtnChangeCamara: {
        borderWidth: 0,
        borderRadius: '100%',
        height: 80,
        width:80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        boxShadow: '5px 0px 5px 0px gray',
        zIndex: 10,

    },
    IconImg:{
        height: 50,
        width: 50,
    },
    MacaraCamara:{
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderWidth: 1,
        zIndex: 5,
    }
})