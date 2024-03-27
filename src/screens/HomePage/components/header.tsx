import { View, Image, StyleSheet } from 'react-native'
import images from '../../../constants/images'
import styles from '../../../assets/style/style'

const Header = () => {

    return (
        <View style={headerhomestyles.header_homepage}>
            <Image source={images.appLogo} style={[headerhomestyles.appName, { margin: 0 }]} />
            <Image source={images.fullfiledLogo} style={headerhomestyles.logoFullfiled} ></Image>
        </View>

    )
}

export default Header

const headerhomestyles = StyleSheet.create({   /*Esse componente é definido pelo cabeçalho da tela de login*/
    
    appName: {
        width: "50%",
        height: "40%",
        position: "absolute",
        resizeMode: 'contain',
      },

    logoFullfiled: {
        height: '40%',
        width: "40%",
        top: "30%",
        resizeMode: 'contain'
      },
    
    header_homepage: {
        alignItems: 'center',
        marginTop: "8%",
        resizeMode: 'contain',
    },
})