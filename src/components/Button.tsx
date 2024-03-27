import React, {useState} from "react"
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, ButtonProps, StyleProp, ViewStyle } from "react-native"
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";

interface CustomButtonProps {
    title: string;
    subtitle?: string;
    onPress: () => void;
    customStyle?: StyleProp<ViewStyle>
    icon?: string
}
const CustomButton: React.FC<CustomButtonProps> = ({title, subtitle, onPress, customStyle, icon}) =>{
    
    const interStyles = [styles.button, customStyle]
    
    return (
        <View>
            <TouchableOpacity style={[interStyles]}
            onPress={onPress}>
                {icon && <Icon name={icon} color={"white"} size={26} style={styles.GbuttonIcon}></Icon>}
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{subtitle}</Text>
            </TouchableOpacity>
        </View>
    )
    
}   
export const styles = StyleSheet.create({
    button:{               /* Estilização Externa do Botão*/
        minWidth: '80%',
        minHeight: '14%',
        borderRadius: 10,
        alignItems:'center',
        backgroundColor:"#09511D",
        marginBottom: '2%',
        flexDirection: 'row',
        paddingLeft: '5%',
        
    },
    GbuttonIcon: {          /*Estilização do Icone do botão*/
        marginRight: '10%',
    },
    text:{              /*Estilização de texto interno do botão*/
        color: "white",
        alignSelf: 'center',
        fontSize: 16,
        flexDirection: 'row',
        fontWeight: "500"
    }
})
    
export default CustomButton

