import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal, Pressable} from "react-native";
import React from "react";
import { Header } from "../../components/Header";
import styles from "../../assets/style/style";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomButton from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { PDFView } from "./components/PDFView";
import { ReportFormData } from "../Create_Report/types/t";
import { RootStackParamList } from "../../navigation/routes/auth.routes";
import { FinishScreenRouteProp } from "./t";
import { formStore } from "../../state/globalStore";
import { PdfGenerator } from "./components/PdfGenerator";
import Share, { ShareSingleOptions } from 'react-native-share'

type FinishScreenProps = {
    route: FinishScreenRouteProp
}

export const FinishReport: React.FC<FinishScreenProps>= ({route}) => {
    const [modalVisibility, setModalVisibility] = useState(false)    
    const [filePath, setFilePath] = React.useState<string | undefined>(undefined)

    const receivedData =  formStore.useState((state) => state)



    const treatData = (data: ReportFormData) => { 
            if (data !== undefined || null){
                const typedReceivedData = receivedData as ReportFormData
                return typedReceivedData
            } 
            return data
    }


    useEffect(() => {

        const generatePDF = async () => {
            try{
                const path = await PdfGenerator(treatData(receivedData))
                console.log(path)
                setFilePath(path)
            } catch(error){
                console.error('Error:', error)
            }
        };
        generatePDF()
    }, [] )

    function toggleModal(){
        setModalVisibility(!modalVisibility)
    }
    

    
   
    
    

    const shareDocument = async () => {
        const shareOptions = {
            title: 'Proinspec Relatório de Reparo',
            message: 'Relatório de Reparo',
            url: `file://${filePath}`
        }
        const shareResponse = await Share.open(shareOptions)
        console.log(shareResponse)
        

    }
    
    
    

    return(
        <SafeAreaView>

            
            <Header></Header>
            <Text style={styles.repair_report_txt}>RELATÓRIO DE REPARO</Text>
            <Pressable
                style={({pressed}) => [
                    finishStl.FILE,
                    {backgroundColor : pressed? '#217C37': '#212A13'}                    
                ]}
                onPress={toggleModal}>
                    
                
                <Text style={finishStl.INSTRUCTIONS}>Relatório Finalizado!</Text>
                <Icon name="file-check-outline" style={{color: "#ffffff", alignSelf: "center"}} size={100}></Icon>
                <Modal
                transparent={true}
                visible={modalVisibility}
                onRequestClose={
                    () => {
                        setModalVisibility(!modalVisibility)
                    }
                
                }
                style={{justifyContent: 'center', alignSelf: 'center', alignItems: 'center'}} 
               >
                
                <PDFView path={filePath}></PDFView>
                
                
               </Modal>
                <Text style={[finishStl.INSTRUCTIONS, {fontSize: 15, opacity: 0.8}]}>Segure para visualizar</Text>
            </Pressable>
            <View style={finishStl.VIEW}>
                    <CustomButton customStyle={finishStl.BTNS} title="Compartilhar" onPress={shareDocument} icon="share-variant-outline" ></CustomButton>       
            </View>
            
        </SafeAreaView>
    )
}


const finishStl= StyleSheet.create({
    FILE:{
        backgroundColor: "#217C37",
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: 400,
        paddingHorizontal: '25%',
        paddingVertical: '25%',
        marginTop: "5%",
        marginBottom: "4%"
    },
    VIEW:{
        borderTopWidth: StyleSheet.hairlineWidth,
        padding: "1%",
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        marginTop: '4%',
        
    },
    BTNS:{
      flexDirection: 'row',
      marginTop: '3%',
      paddingVertical: '4%',

    },

    IconSTL:{
        alignSelf: 'center'
    },

    INSTRUCTIONS:{
        color: '#ffffff',
        marginBottom: '4%',
        alignSelf: "center", 
        fontSize: 18
    }
})