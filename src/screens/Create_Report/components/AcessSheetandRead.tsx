import {PermissionsAndroid, View, Button, StyleSheet} from 'react-native';
import DocumentPicker, { DirectoryPickerResponse, DocumentPickerResponse, types} from 'react-native-document-picker'
import React, {useState} from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import * as XLSX from 'xlsx'
import CustomButton from '../../../components/Button';


export default function ReadSheet(){

const [result, setResult] = React.useState<Array<DocumentPickerResponse> | DirectoryPickerResponse | undefined | null > ()
const [data, setData] = React.useState<unknown >([])
const [selected, setSelected ] = React.useState<string | number>()
const [clicked, setClicked] = React.useState(true)
const outPut : string[] = data as string[]

   async function openXLSX(){
    
    /*Componente usado para ler o aquivo .xml da programação semanal*/
   
    try {
        const per = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
        const pickerResult = await DocumentPicker.pickSingle({
            presentationStyle: "fullScreen",
            copyTo: 'cachesDirectory',
            type: [types.xlsx],
            mode: 'open'
            
        })
        setResult([pickerResult])
        const path: string | null = pickerResult.fileCopyUri
            
        if (path !== null){
             const res = await (await fetch(path)).arrayBuffer()
             const workbook = XLSX.read(new Uint8Array(res), {type: 'buffer'})
             const wsname = workbook.SheetNames[0]
             const ws = workbook.Sheets[wsname]
             const data: {[key: string]: any}[]= XLSX.utils.sheet_to_json(ws,{header: 2})

             const notas: any = data.map((obj) => {
                if("NOTA" in obj){
                    return obj.NOTA
                }
             }).filter((nota: string) => nota !== undefined)

             setData(notas)
             setClicked(false)
            //setData(data[0]["NOTA"])
        }       
     } catch (e){
        
    } 
    
   
    
}


    return(
        <View style={styles.container}>
        
        <CustomButton customStyle={styles.btn}title='Abrir planilha de planejamento' onPress={openXLSX}/>
         {!clicked &&(
             <SelectList 
             setSelected={(value: number | string) => setSelected(value)} 
             data={outPut}
             boxStyles={{backgroundColor:"#ABABAB"}} 
             inputStyles={{color:"black"}}
             dropdownTextStyles={{color:"black"}}
             save='value' 
         />  
     
        )}        
        </View>
        

    )
    
}

const styles = StyleSheet.create({
    
    container:{
        height: "8%",
        marginVertical: "1%",
        marginHorizontal: '13%',
        justifyContent: "center",
        
    },
    btn: {
        height: "100%",
        alignSelf: 'center',
         }
})