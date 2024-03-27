import {TextInput, StyleSheet, Text, TouchableOpacity, View, Animated } from "react-native"
import styles from "../../../assets/style/style"
import {Header} from "../../../components/Header"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { useEffect, useRef, useState } from "react"
import { Return } from "../../../components/Return"
import { Controller, FieldValues, UseControllerProps, useFormContext } from "react-hook-form"
import { PopUp } from "../../../components/PopUp"
import { CommentsScreenNavigationType, ReportFormData } from "../types/t"
import { useForm } from "react-hook-form"
import { formStore } from "../../../state/globalStore"
import { useNavigation } from "@react-navigation/native"
import { CustomInputProps } from "../../../components/Input"

    /* Esse componente se trata da parte de Observação e Detalhamento ESCRITO do relatório*/
const InputComment: React.FC<CustomInputProps> =({value, onChangeText}) =>{

    return(
       <TextInput style={commentStyle.commentInput}
       maxLength={224}
        multiline={true}
        numberOfLines={15}
        placeholder="Adicione aqui observações"
        onChangeText={onChangeText}
        value={value?.toString()}
        
        
        />
    )
}

function ControlledComments<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...TextInputProps}: UseControllerProps<FormType>){
        return(
            <Controller
            control={control}
            rules={rules}
            name={name}
            
            render={({field, fieldState: {error}}) => (      
                        
                        <InputComment onChangeText={field.onChange} value={field.value}/>        
            )}/>

            
        )
    }



function Comments(){
    const [isTextInputVisible, setTextInputVisible] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const {
        handleSubmit,
        control,
        formState: { errors },
        watch
      } = useForm({ defaultValues: formStore.useState((state) => state) });
      
     const fadeIn = () => {
        Animated.timing(fadeAnim, {toValue: 150, duration: 10000, useNativeDriver: true}).start()
     }

     const fadeOut = () => {
        Animated.timing(fadeAnim, {toValue: 0, duration: 5000, useNativeDriver: true}).start()
     }
        
    
    function onSubmit(data: ReportFormData){
        formStore.update((state)=>{
            state.comments = watch('comments')
        })

        fadeIn()
        
       
    }      

        
    

    function openTextInput(){
        setTextInputVisible(true)
    }

    
    return(
        <SafeAreaView>
            
            <Header/>
            <Text style={styles.repair_report_txt}>RELATÓRIO ESCRITO</Text>
            <TouchableOpacity  style={commentStyle.container} onPress={() => openTextInput()}>
                <View style={commentStyle.headerInput}>
                    <Icon style={{marginTop: '2.5%', color: "#065A1E",}} size={24} name="file-document-edit-outline"></Icon>
                    <Text style={commentStyle.CommentText}> Defeito/Histórico/Observação:</Text>
                </View>
               
                    {isTextInputVisible && (
                        <ControlledComments control={control} name="comments"/>
                    )}
                    
                       
                 
            </TouchableOpacity> 
            <View style={{flexDirection: "row", justifyContent: 'space-between', marginHorizontal: '4%'}}>
                <Return/>
                <View>
                    <TouchableOpacity style={{marginRight: '22%',marginBottom:'1%', justifyContent: 'center', alignSelf: 'center'}}  onPress={handleSubmit(onSubmit)}>
                        <Icon name="check" size={30} style={commentStyle.confirmComment}></Icon>
                    </TouchableOpacity>
                      
                 
                            <Animated.View style={[commentStyle.commentAdded, { opacity: fadeAnim}]}>
                                <Text style={{color: 'white'}}> Comentário adicionado com sucesso. </Text>
                            </Animated.View> 
                            
                    
                </View>

            </View>
                  
        </SafeAreaView>
    )
}

const commentStyle = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: "#065A1E",
        margin: "5%",
        borderRadius: 10,
        height: "65%",
        flexDirection: "row",
        justifyContent: "center",
        marginRight: '5%',
        marginLeft: '5%',
    },

    commentInput: {
        position: 'absolute',
        width: '50%',
    },
    commentAdded: {
        backgroundColor: 'green',
        borderRadius: 12,
        alignItems: 'center',
       
        
    },

    CommentText:{
        color: "#065A1E",
        marginTop: '3%',
        fontSize: 16,
        fontWeight:'500',
        alignItems: 'flex-start',
        marginBottom: '5%',

    },
    headerInput:{
        flexDirection:"row",
        marginBottom: "3%"
    },
    confirmComment:{
        color: 'white',
        backgroundColor: "#065A1E",
        paddingHorizontal: '30%',
        paddingVertical: '3%',
        borderRadius: 10,
        alignSelf: 'center',
    },
})

export default Comments