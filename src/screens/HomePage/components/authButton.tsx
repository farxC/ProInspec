import {TouchableOpacity, Text, StyleSheet} from "react-native";
import styles from "../../../assets/style/style";


const AuthButton = ({onPress = () => {}}) => {

    return(
        <TouchableOpacity style={authBstyles.auth_button} onPress={onPress}>
            <Text style={{color:"#FFFFFF"}}>Login</Text>    
         </TouchableOpacity>

    )
}


export default AuthButton  /*Esse componente se define pelo botão de confirmação do login*/

const authBstyles = StyleSheet.create({
    auth_button: {
        borderRadius: 10,
        elevation: 8,
        backgroundColor: "#09511D",
        alignSelf: "center",
        paddingHorizontal: '30%',
        paddingVertical: '3%',
        margin: 50,
        justifyContent: 'center',
    
      },
})