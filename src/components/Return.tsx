import {Image, TouchableHighlight, TouchableOpacity, View, StyleSheet } from "react-native";
import images from "../constants/images";
import { RouteProp, useFocusEffect, useRoute, useNavigation } from "@react-navigation/native";
import React, {useCallback, useState,FC} from 'react'
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/routes/auth.routes";
import { formStore } from "../state/globalStore";


type ReturnProps = {
    
}

export const Return: React.FC<ReturnProps> =({}) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList, 'Photo' | 'Create' | 'Comments'>>()
 
    
    return(
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={returnstyl.returnbutton}>
                <Image style={returnstyl.arrowlft} source={images.arrowLeft}></Image>
            </View>
        </TouchableOpacity>
    )
}

const returnstyl = StyleSheet.create({
    returnbutton: {
        marginLeft: '5%',
        marginVertical: '2%',
    },
    arrowlft: {
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
})