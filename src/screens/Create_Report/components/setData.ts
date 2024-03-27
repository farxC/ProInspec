import AsyncStorage from "@react-native-async-storage/async-storage";
import { ReportFormData } from "../types/t";
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from "react-native-pdf";
import { PdfGenerator } from "../../Finish_Report/components/PdfGenerator";
import { FieldValues } from "react-hook-form";

export const setData = async (formvalues: FieldValues) => {   {/*Script com o conceito definido em guardar os dados para que não sejam perdidos */}
    try{
        await AsyncStorage.setItem('Data', JSON.stringify(formvalues))
        const currentData = await AsyncStorage.getItem('Data')
       
        
        return currentData
        
    } catch(e) {
        console.error(e)
    }
}


