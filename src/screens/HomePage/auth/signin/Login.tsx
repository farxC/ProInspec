

import Header from "../../components/header"
import AuthButton from "../../components/authButton"
import styles from "../../../../assets/style/style"
import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, View, Text, Alert, Keyboard} from "react-native"
import { AuthErrorCodes, signInWithCustomToken, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../../../helpers/firebase/connection"
import { Controller, useForm, useWatch } from "react-hook-form"
import { ControlledTextInput } from "../../../../components/ControlledTextInput"
import { PopUp } from "../../../../components/PopUp"
import { Dropdown } from "../../../../components/Dropdown"
import { ControlledDropdown } from "../../../../components/ControlledDropdown"



/* Aqui definimos o tipo (ou seja, os itens) do formulário de
login e nele atribuímos qual será o valor recebido */
type LoginFormData = {
    email: string,
    password: string,
    registration: string,
    dropdown: string,
    sector: string,
    error: string,
}


const Login:React.FC =()=>{

    const [visible,setVisible] = React.useState(false)
    const [text, setText] = React.useState('')
    const [method,setMethod] = React.useState<string | null>(null)
    
    /*PARA MAIS INFORMAÇÕES ACESSAR DOCUMENTAÇÃO DO REACT FORM HOOK */
    // Utiliza-se de um state hook para ter controle do formulário proposto
    // na tela de Login. Informando o modo e os valores padrão no ponto de partida.
    const {control, formState: {errors}, handleSubmit, watch, getValues} = useForm<LoginFormData>({
        mode: "onChange",
        defaultValues: {
            email: "",
            password: "",
            dropdown: "Método de Login",
            error:"E-Mail ou senha estão incorretos, tente novamente",
            registration: undefined,
        }
    })

   useEffect(() => {
        if (watch('dropdown') === 'Entre com e-mail e senha'){
            setMethod('email')
        } else{
            setMethod('registration')
        }
        console.log(method)
   })
    

   

/* Função assíncrona que realiza SignIn do usuário, primeiro é feito uma tentativa de conexão, com as informações 
   passadas no formulário pelo usuário. Essa comunicação ocorre com o Auth do Firebase
*/
    async function signIn(){
        try {
            if(method === 'email'){
                await signInWithEmailAndPassword( auth, getValues('email'), getValues('password'))
                console.log("OK", getValues('email'))
            } else {
                await signInWithCustomToken(auth, getValues('registration'))
            }
            
        } catch( error ){
            
            return onError(error) 
           
        }
    }

    function onError(error: unknown){
        setVisible(!visible)
        setText(`${error}`)
    }

 

    return(
        
            <KeyboardAvoidingView style={styles.container}>    
                {/*Esse componente é definido pelos inputs de login e respectivo erro de input*/}
                <View style={styles.container} >
                    <Header/>
                
                    <ControlledDropdown
                     control={control}
                     placeholder="Método de Login"
                     DropdownValues={[{ key: "1", value: 'Entre com e-mail e senha' }, { key: "2", value: "Entre com matrícula" }]}
                      name={"dropdown"}/> 
                    {
                        method === 'registration' ? <ControlledTextInput
                        control={control}
                        name="registration"
                        rules={{required: 'Insira sua matrícula'}}
                        placeholder="Matrícula"
                        icon="key"/> 
                        
                     :


                    <View>
                        <ControlledTextInput
                            control={control}
                            name="email" 
                            rules={{required: "Insira seu e-mail"}}
                            placeholder="E-Mail"
                            icon="email" />
    
                        <ControlledTextInput
                            control={control}
                            name={"password"}
                            rules={{required: 'Insira sua senha'}}
                            placeholder="Senha"
                            icon={"lock"}
                            secundaryIcon="eye"
                            toggleText={true}/>  

                    </View>


                    }
                    
                            
                   { visible && <PopUp text={text} ></PopUp>} 
                              
                   
                    <AuthButton onPress={handleSubmit(signIn)}/>
                   
    
                </View>
            </KeyboardAvoidingView>
        

    )

}

export default Login