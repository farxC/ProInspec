import {Text, SafeAreaView, ScrollView} from 'react-native';
import React, { createContext } from 'react'
import ReadSheet   from "./components/AcessSheetandRead"
import {Header} from '../../components/Header';
import styles from '../../assets/style/style';
import {ReportForm} from '../Create_Report/components/Report_form';
import Buttons from './components/Buttons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/routes/auth.routes';
import { CreateReportNavigationType } from './types/t';



// Se repete algumas vezes dentro da estrutura do código, ou seja, com certeza pode ser refatorado
/*Esse tipo informado permite que deixemos claro ao compilador que o código proposto se trata de um objeto de navegação (<NativeStackScreenProps>)*/





function CreateReport(){
    
    

    //Para resolver o problema de contexto, onde precisamos consumir os dados de uma função pode-se usar a context api ou redux.

    return(
        <SafeAreaView style={styles.container}>
           
                <Header></Header>
                <Text style={styles.repair_report_txt}>RELATÓRIO DE REPARO</Text>
                <ReportForm></ReportForm>
                
               
          
            
        </SafeAreaView> 
    )
}

export default CreateReport