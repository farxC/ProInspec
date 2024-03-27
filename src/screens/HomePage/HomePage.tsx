import React, {useState} from 'react'
import Login from "./auth/signin/Login";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/routes/auth.routes';

import { View } from 'react-native';
import styles from '../../assets/style/style';



type Props = NativeStackScreenProps<RootStackParamList ,"Home">

const HomePage =({navigation}: Props) => {

    return(
        <View style={styles.container}>
            <Login></Login>
        </View>
        
    )

}


export default HomePage