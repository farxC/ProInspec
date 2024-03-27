import { KeyboardAvoidingView, TextInput, TouchableOpacity, View, StyleSheet, ViewStyle, TextInputProps} from "react-native";
import styles from "../assets/style/style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, {useState} from "react";
import { StyleProp } from "react-native";


export interface CustomInputProps{
    placeholder?: string;
    value?: string | number;
    onChangeText ?: (x: string) => void;
    icon?: string;
    secureTextEntry?: boolean 
    toggleText?: boolean
    customStyle?: StyleProp<ViewStyle>
    secundaryIcon?: string

   
    
}

const CustomInput: React.FC<CustomInputProps> = ({placeholder, value, onChangeText, icon,toggleText, customStyle, secundaryIcon}) => {

   const [missText,setMissText] = React.useState(true)
   const combinedStyle = [styles.input, customStyle]
   

   function handleText (){
        setMissText(!missText)
        
   }

    return(
     
            <TouchableOpacity style={[styles.componentsInput]}>
            {/*O icone só irá ser inserido se o valor da expressão && (AND) for aceita, caso seja falsy o valor de 'icon' <- se atente ao nome, ou seja, 'null', 'undefined' ou 'false' irá renderizar sem icone.
            Sem isso, o JSX não roda, pois a expressão do Icon não pode ser nulo*/}
             { icon && <Icon onPress={handleText} color={"#065A1E"} name={icon} size={30} style={{alignSelf:"center", paddingVertical: "1%"}}></Icon>}
            <TextInput style={combinedStyle} secureTextEntry={toggleText? missText: false} placeholder= {placeholder}  placeholderTextColor={"#065A1E"} value={value?.toString()} onChangeText={onChangeText}></TextInput>
            { secundaryIcon && <Icon onPress={handleText} color={"#065A1E"} name={secundaryIcon == 'eye'? missText? 'eye': 'eye-off': secundaryIcon} size={25} style={{alignSelf:"center"}}></Icon>}
           
            </TouchableOpacity>
        
       
    )

}

export default CustomInput