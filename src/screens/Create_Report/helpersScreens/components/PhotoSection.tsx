import { View, Text, StyleSheet, Modal } from "react-native";
import { ControlledPhotoRegister, PhotoRegister } from "./photo";
import React from "react";
import { PopUp } from "../../../../components/PopUp";
import { FieldValues, UseControllerProps, useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { formStore } from "../../../../state/globalStore";
import { PhotoObject } from "../../types/t";
    /*Esse componente se trata da sequencia e denominação dos componentes Photo.tsx(*/

interface Props{
    title?: string,
    repeat?: number,
    mandatory: boolean,
    id: PhotoObject
    
}


export const PhotoSection: React.FC<Props> = ({title, mandatory, id}) =>{

    const session = id.session
    const PhotosIDs = id.IDsSession
    
    

    
    const {
        handleSubmit,
        control,
        formState:{errors},
        watch
    } = useForm({defaultValues: formStore.useState((state) => state)})

    const txtReq = 'Fotos obrigatórias não foram enviadas!'
    return(
        <View style={styles.main}>
            {title? <View style={styles.borderView}><Text style={{alignSelf:"center"}}>{title}</Text></View> : <></>}
            <View style={styles.container}>
                 {mandatory ?
                    <>
                    <ControlledPhotoRegister id={PhotosIDs[0]} rules={{required: txtReq}} control={control} name="images" title="Identificação"/> 
                    <ControlledPhotoRegister id={PhotosIDs[1]} control={control} name="images" title="Visão Geral"/>
                    <ControlledPhotoRegister id={PhotosIDs[2]} control={control} name="images" title="Evidência da Falha"/>
                    </> : 
                    <>
                    <PhotoRegister id={PhotosIDs[0]}/>
                    <PhotoRegister id={PhotosIDs[1]}/>
                    <PhotoRegister id={PhotosIDs[2]}/>
                </>}
              
                
                
            </View>
            
        </View>
        
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",  
        paddingVertical: '10%',
        alignSelf: 'center',
    },
    main:{
        flex: 1,
        alignSelf: "center",
        
    },
    borderView: {
        flexDirection: "column",
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: "center",
        marginBottom: '-5%',      
      
    },
    
    
})