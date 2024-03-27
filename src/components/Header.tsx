import { Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, Modal} from "react-native";
import images from "../constants/images"
import User from "./user";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState, FC, useContext } from "react";
import { useAuth } from "../helpers/firebase/useAuth";
import { auth } from "../helpers/firebase/connection";


export const Header: React.FC = () => {
    const [modalVisible, setModalVisible ] = useState(false)
    const {user} = useAuth()
   
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const handleLogout = () => {
        auth.signOut()

    }
       

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logo} source={images.appLogo} resizeMode="contain"></Image>
            <Image source={images.croppedLogo} style={styles.cropped}></Image>
            <TouchableOpacity onPress={toggleModal}>
                <Modal transparent={true} visible={modalVisible} onRequestClose={() => {
                    setModalVisible(!modalVisible)
                }}>
                    <TouchableOpacity onPressOut={toggleModal}>
                        <View style={styles.modalContainer}>
                            <TouchableOpacity style={styles.modalView} onPress={handleLogout}>
                                <Text style={styles.txt} >Sair</Text>
                                <Icon color={'red'} size={30}name="exit-to-app"></Icon>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                    
                </Modal>
                <Icon name="account" size={34} color="black" style={{marginTop: '10%', marginRight: '10%', alignSelf: 'center'}} />
                <User></User>
            </TouchableOpacity>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent:"center",
        marginBottom: '5%',
      
    },  
    txt:{
       alignSelf: 'center',
       fontWeight: 'bold'
    },
    modalContainer:{
        marginLeft: "60%",
        marginTop: '23%',
        
    },
    modalView:{
        flexDirection: "row",
        alignSelf: 'center',
        backgroundColor: "white",
        borderColor: "#09511D",
        borderRadius: 10,
        borderWidth: 2,
        paddingHorizontal:"5%",
        paddingVertical: "8%"


        
    },

    logo:{
        height: "20%",
        width: "32%",
        marginLeft: "5%",
        aspectRatio: '1.5',
        marginTop: '3%',

    
        
    },
    cropped: {
        height: '1%',
        width: "9%",
        paddingTop: '10%',
        marginTop: '8%',
        marginRight: '9%',
        marginLeft: '10%',
        
        
        
    },
    textStyle:{
        color: "white"
    }

})