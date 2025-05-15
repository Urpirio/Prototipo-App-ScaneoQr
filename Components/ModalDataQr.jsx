import {Modal, TouchableOpacity, View,Text,Clipboard } from "react-native";
import { ModalQrStyle } from "../Style/ModalQrStyle";


export default function ModalDataQr({data,Status,CloseFunction}) {

    const CopyContentQR = () => {
       Clipboard.setString(data.data);
    };

    

  return (
    <Modal visible={Status} transparent ={true}>
        <View style = {ModalQrStyle.BodyContainer}>
            <View style={ModalQrStyle.Container}>
                <Text style={ModalQrStyle.TextInfo}>{data ? data.data : 'No existe'}</Text>

                <View style={ModalQrStyle.ContainerBtns}>
                    <TouchableOpacity style={ModalQrStyle.BtnCopyContentQR} onPress={CopyContentQR}>
                        <Text style = {ModalQrStyle.TextbtnModalCopy}>Copy code</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ModalQrStyle.BtnModalClose} onPress={CloseFunction}>
                        <Text style = {ModalQrStyle.TextbtnModalClose}>Close Modal</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
};
