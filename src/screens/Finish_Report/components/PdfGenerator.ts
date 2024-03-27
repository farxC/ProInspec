import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import { ReportFormData } from '../../Create_Report/types/t';
import { createHTML } from './createHtml';
import { clearAllItems } from '../../../asyncStorage/clearItems';

  /*Esse .ts é definido como um script da biblioteca HTMLtoPDF e é util para convertermos um formulário .tsx em HTML e após isso para PDF*/

export const PdfGenerator = async (data: ReportFormData) => {
   // 'File' está de modo estático, quando criarmos uma nova instancia irá sobrescrever a última já feita. Necessário implementar lógica pra que tal seja 
  // agora de modo dinâmico, onde cada arquivo PDF seja salvo com um hash novo e não sobrescreva nenhum arquivo.
   
  
 
  const htmlContent = createHTML(data)
 
    
    try {
      const options = {
        html: htmlContent,
        fileName: 'Relatorio_de_Reparo',
        directory: 'Documents',
        
        
      }
     
      const file = await RNHTMLtoPDF.convert(options);
      clearAllItems()
      
      return file.filePath?.toString()
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  
}


