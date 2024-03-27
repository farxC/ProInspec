
import React, { useEffect } from 'react';
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import { PdfGenerator } from './PdfGenerator';
import { setData } from '../../Create_Report/components/setData';
import { ReportFormData } from '../../Create_Report/types/t';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



interface PDFViewProps{
    path: string | undefined,
}

export const PDFView: React.FC<PDFViewProps> =({path}) => {

        
        const source = {
            uri: path,
            cache: true,
            base64: true
        }

        return (
            <View style={styles.container}>
              
                 <Pdf
                    trustAllCerts={false}
                    source={source}
                    onLoadComplete={(numberOfPages,filePath) => {
                        
                    }}
                   
                    onError={(error) => {
                        console.log(error);
                    }}
                   
                    style={styles.pdf}/>     
            </View>
            
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 416,
        height:830,
        position: 'absolute',
    },
    pdf: {
        flex: 1,
        height: '100%',
        width: '100%'}
});

