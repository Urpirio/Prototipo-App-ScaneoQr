
// Dependecias
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text,TouchableOpacity,Image, } from 'react-native';
import {CameraView, useCameraPermissions} from 'expo-camera';
import { useState } from 'react';

// Styles
import { HomeStyle } from '../Style/HomeStyle';
import { CamaraStyle } from '../Style/CamaraStyle';

// icons
import IconChange from '../assets/icons/swap-diagonal.png';
import IconFile from '../assets/icons/layers-down-left (1).png'
import { useChangeCamara } from '../hooks/useChangeCamara';
import ModalDataQr from '../Components/ModalDataQr';

export default function HomeScreen() {

    // Hook para cambiar de la camara trasera a la delantera.
    const { ChangeCamara,InCamara } = useChangeCamara();

    const [TienePermiso, PermisoRequerido]= useCameraPermissions();


    const [QrData,setQrData] = useState(null);
    const [StatusModal,setStatusModal] = useState(false);

    if(!TienePermiso){
        return(
            <View/>
        )
    };

    if(!TienePermiso.granted){
        return(
            <View style={HomeStyle.Permiso_Style}>
                <Text style={HomeStyle.TextPermisos}>Necesitamos acceder a tu camara</Text>
                <TouchableOpacity onPress={PermisoRequerido} style={HomeStyle.BtnPermisoStyle}>
                    <Text style={HomeStyle.TextBtnPermiso}>Permitir</Text>
                </TouchableOpacity>
            </View>
        )
    };


  return (
    <SafeAreaView style={HomeStyle.container}>
        
        <CameraView style={CamaraStyle.CamaraView} facing ={InCamara} 
            onBarcodeScanned={(Data)=>{
               setQrData(Data);
               setStatusModal(true);
            }} >

            <View style={CamaraStyle.ContainerBtnCamara}>
                <TouchableOpacity style={CamaraStyle.BtnChangeCamara} onPress={()=>{ChangeCamara()}}>
                    <Image style ={CamaraStyle.IconImg} source={IconChange}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={CamaraStyle.BtnChangeCamara} onPress={()=>{alert('File')}}>
                    <Image style ={CamaraStyle.IconImg} source={IconFile}></Image>
                </TouchableOpacity>
            </View>

            <ModalDataQr 
                data={QrData} 
                Status={StatusModal} 
                CloseFunction={()=>{setStatusModal(!StatusModal)}}/>
            
        </CameraView>
        
    </SafeAreaView>
  )
};
