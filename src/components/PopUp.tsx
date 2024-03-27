import { Alert, View, Modal, StyleSheet, Text, TouchableOpacity, TouchableHighlight } from "react-native";
import React,{ FC, useState } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FieldErrors } from "react-hook-form";

type popUpProps = {
    text: string
}


export const PopUp: React.FC<popUpProps> = ({text}) => {
    const [visible,setVisible] = React.useState(true)

    const openModal = () => {
        setVisible(visible)
    }

    const closeModal = () => {
        setVisible(!visible)
    }

    return(
        <Modal transparent={true} visible={visible} onRequestClose={closeModal}>
            <View style={pStyles.modalBorder}>
                <View style={pStyles.content}>
                    <Icon name="error" size={50} color={"#FF0000"} style={pStyles.Xicon}></Icon>
                    <Text style={pStyles.txt}>                   Atenção!{'\n'}{text}</Text>
                    <TouchableHighlight style={pStyles.bckBtn}onPress={closeModal}>
                        <Text style={{color: "white", alignSelf:"center", fontWeight: '600'}}>Voltar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

const pStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:"center",


        
    },

    Xicon:{
        marginTop: '2%',
    },

    txt:{
        fontWeight:"800",
        color: "#FF0000",
        margin: '3%',
        fontSize: 16,
        justifyContent: 'center',
        
        
        
    },
    modalBorder:{
        flex:1,
        justifyContent:"center",
        
    },
    bckBtn:{
        backgroundColor:"#09511D",
        borderRadius:8,
        width: "90%",
        marginTop: '2%',
        paddingVertical: '3%',
        paddingHorizontal: '30%',
        marginBottom: '3%'
    },
    content:{
        backgroundColor: "white",
        margin: "20%", 
        padding: "1%", 
        borderRadius:12,
        alignItems:"center",
        borderWidth: 1,
    }
})