import { useState } from "react";

export const useChangeCamara = () =>{
    const [InCamara, setInCamara] = useState('back');
    
    const ChangeCamara = ()=>{
        InCamara === 'back' ? setInCamara('front') : setInCamara('back');

        return(InCamara)
    }

    return({
            ChangeCamara: ChangeCamara,
            InCamara: InCamara
        })
};