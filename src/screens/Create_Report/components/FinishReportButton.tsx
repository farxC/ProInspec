import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { ButtonProps } from "react-native";
import React from "react";

        /*Este componente se refere a um botão usado para nos levar até a página de Finalização, Exportação de Compartilhamento do Relatório*/

export const FinishReportButton: React.FC <ButtonProps>=({onPress}) =>{

    return(
        <View style={finBtnStl.container}>
            <TouchableOpacity style={finBtnStl.button} onPress={onPress}>
                <Icon name="check" size={26} style={{color: 'white'}}></Icon>
                <Text style={{color: "white", }}> Exportar/Finalizar</Text>
            </TouchableOpacity>
        </View>
    )
}

const finBtnStl = StyleSheet.create({
    button:{
       
        borderRadius: 8,
        alignItems:'center',
        backgroundColor:"#043A13",
        paddingHorizontal: "23%",
        fontWeight: '400',
        flexDirection: 'row',
        marginHorizontal: '7.5%',
        paddingVertical: '2.5%',

        
        
    },
    container: {
        flexDirection: 'column',
    }
})