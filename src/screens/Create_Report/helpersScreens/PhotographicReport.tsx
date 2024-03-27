import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Text, ScrollView } from "react-native";
import {Header} from "../../../components/Header";
import styles from "../../../assets/style/style";
import { Return } from "../../../components/Return";
import { PhotoSection } from "./components/PhotoSection";
import { useForm, useFormContext } from "react-hook-form";
import { formStore } from "../../../state/globalStore";
import { useEffect } from "react";
import { PhotoObject } from "../types/t";

    /*Esse componente é denominado pela divisão de importancia da sequencia dos Comp. Photo.tsx, onde o dividimos entre inputs de fotos Obrigatórias e Opcionais*/

function PhotoReport() {
    const methods = useFormContext()
    
    const photosID: PhotoObject[] = [
        {session: 1, IDsSession: [0,1,2]},
        {session: 2, IDsSession: [3,4,5]},
        {session: 3, IDsSession: [6,7,8]},
        {session: 4, IDsSession: [9,10,11]}
    ]
    
    const {
        handleSubmit,
        control,
        formState: {errors},
        watch
    } = useForm({defaultValues: formStore.useState((state) => state)})

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Text style={styles.repair_report_txt}>RELATÓRIO FOTOGRÁFICO</Text>
            
                <ScrollView style={styles.container}>
               
                    <PhotoSection id={photosID[0]} title="Obrigatórias" mandatory></PhotoSection>
                    <PhotoSection id={photosID[1]} title="Opcionais" mandatory={false}></PhotoSection>
                    <PhotoSection id={photosID[2]} mandatory={false}></PhotoSection>
                    <PhotoSection id={photosID[3]} mandatory={false}></PhotoSection>
                        
                </ScrollView>
        
                
            <Return />
        </SafeAreaView>
    )
}

export default PhotoReport