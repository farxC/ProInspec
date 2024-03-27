import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { FormProvider, SubmitHandler,useFormContext, UseFormProps, UseFormReturn, UseFormStateProps, useForm, FieldValues, SubmitErrorHandler } from "react-hook-form";
import { ControlledTextInput } from "../../../components/ControlledTextInput";
import ReadSheet from "./AcessSheetandRead";
import Buttons from "./Buttons";
import { ControlledDateInput } from "../../../components/ControlledDateInput";
import { ControlledDropdown } from "../../../components/ControlledDropdown";
import { ReportFormData } from "../types/t";
import { KeyboardAvoidingView, TextInput } from "react-native";
import { CreateReportNavigationType } from "../types/t";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { formStore } from "../../../state/globalStore";
import User from "../../../components/user";
import DateInput from "./DateInput";
import { PopUp } from "../../../components/PopUp";
import { ControlledPhotoRegister } from "../helpersScreens/components/photo";



   /* Este componente se refere ao grupo de Inputs que formam a tela de criação do relatório*/

export const ReportForm: React.FC = () =>{
    

    const navigation = useNavigation<CreateReportNavigationType>()

     // Navega a página secundária de observações.
     function handleComments(values: ReportFormData){
        navigation.navigate("Comments")
        formStore.update((state) => {
            state.date = values.date
            state.local = values.local
            state.env = values.env
            state.materialcode = values.materialcode
            state.order = values.order
        })
        
    }
    
    // Navega a página onde o usuário pode incluir fotos a submissão.
    function handlePhotos(){
        navigation.navigate("Photo")
    }
    
    const exportProcess: SubmitHandler<ReportFormData> =( data: ReportFormData) =>{
           
            navigation.navigate("Finish", {data: data})
            formStore.update((state) => {
                state.date = data.date
                state.local = data.local
                state.env = data.env
                state.materialcode = data.materialcode
                state.order = data.order
                state.note = data.note
                state.images = data.images
            })
        
       
        
       // storeDataAndRead(data)
       
        
    }

    //TODO
    const onInvalid: SubmitErrorHandler<ReportFormData> = (errors) => {
        
      console.log(errors.comments)
            

    }

    const FormMethods= useForm<ReportFormData>({
        mode: "onChange",
        defaultValues: (formStore.useState(state => state))
    })
    
    const required = '* Necessário'
    
  
    return(
        <SafeAreaView>
        <KeyboardAvoidingView >
            <FormProvider {...FormMethods}>
                <ControlledTextInput 
                    control={FormMethods.control}
                    name="search" 
                    rules={{maxLength: 32}}
                    placeholder="Pesquise aqui relatórios"
                    icon="magnify"/>

                 
            <ControlledTextInput 
                control={FormMethods.control}
                name={"local"} 
                rules={{required: required}} 
                placeholder={'Local de instalação'}/>
             
            <ControlledDateInput
                control={FormMethods.control}
                name="date"
                rules={{maxLength: 10, required: '*Data informada inválida.'}}
            /> 
          
            <ControlledTextInput
                control={FormMethods.control}
                name="order"
                placeholder={'N° Ordem'}
                rules={{maxLength: 32, required: required}}/> 
            
            <ControlledTextInput
                control={FormMethods.control}
                name="note"
                placeholder={'N° Nota'}
                rules={{maxLength: 32, required: required}}/>
            
            <ControlledTextInput
                control={FormMethods.control}
                name="materialcode"
                placeholder={'Código do Material'}
                rules={{maxLength: 32, required: required}}/>

            {/*Dropdown precisa ser refatorado. 'Atividade' (Default Value) está contando como uma seleção do Dropdown, não exigindo validação no formulário.*/}
            <ControlledDropdown
                
                control={FormMethods.control}
                name="env"
                DropdownValues={[{key:"1",value:"REPARO EXTERNO"},{key:"2",value:"REPARO INTERNO"}, {key:"3",value:"ATIV. EM ÁREA"}]}
                placeholder="Atividade"
                rules={{ minLength:9,required: required}} />

            

            <Buttons onPress={[() => handleComments(FormMethods.getValues()), () => handlePhotos(), FormMethods.handleSubmit(exportProcess, onInvalid) ]}></Buttons>     
           </FormProvider>
         </KeyboardAvoidingView>
        </SafeAreaView>
    )
   
}


