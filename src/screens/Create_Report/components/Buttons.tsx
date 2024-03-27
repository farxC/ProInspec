import React, { FC } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CustomButton from "../../../components/Button";
import {FinishReportButton } from "./FinishReportButton";
import { Button } from "react-native";
import { launchCamera } from "react-native-image-picker";



export interface ButtonsProps{
    onPress: Array<() => void>
}

    /*Esse componente se refere aos botões que levam até os relatórios: Escrito/OBS e Relatório Fotográfico*/

const Buttons: React.FC <ButtonsProps> = ({onPress}) => {
    
   
    return (
        <View style={btnStyles.container}>
        <TouchableOpacity style={btnStyles.rowbuttons}>
            <TouchableOpacity style={btnStyles.btnOBS}>
                <CustomButton icon="file-document-edit-outline" title='Observação' customStyle={{paddingVertical:'6%', paddingHorizontal:'15%'}} onPress={onPress[0]}></CustomButton>
            </TouchableOpacity>
            <TouchableOpacity style={btnStyles.btnFotos}>
                <CustomButton icon="camera" title='Fotos' customStyle={{paddingVertical:'6%', paddingHorizontal:'2%', paddingRight: '39%', paddingLeft: '10%'}} onPress={onPress[1]}></CustomButton>
            </TouchableOpacity>
        </TouchableOpacity>
        
            <FinishReportButton  title='none' onPress={onPress[2]}></FinishReportButton>
        </View>
    )
}


const btnStyles = StyleSheet.create({
    container: {
        borderRadius: 8,
        marginTop: '2%',
    },

    rowbuttons:{
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: '2%'

    },

    btnOBS:{
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    btnFotos:{
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        


    },
})


export default Buttons