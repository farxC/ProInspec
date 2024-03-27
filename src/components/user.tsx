import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'

import { database } from '../helpers/firebase/connection';
import { ref, onValue, DataSnapshot, get} from 'firebase/database';
import { useAuth } from '../helpers/firebase/useAuth';
import { formStore } from '../state/globalStore';

    /* Este componente se refere ao processamento da informação de nome e matrícula do usuário*/

export default function User(){
    const [data, setData] = useState({
        name: '',
        sector: '',
        
    })
    const {user} = useAuth()
    const uid = user?.uid

    async function FetchData(){
        const dataRef = ref(database, "users/" + uid + "/")
        try{
            const snapshot = await get(dataRef);
            if(snapshot.exists()){
                const dataObjectRef = snapshot.val();

                if (dataObjectRef && dataObjectRef.SETOR && dataObjectRef['NOME']['PRIMEIRO NOME']){
                    setData((prevData) => ({...prevData, sector: dataObjectRef.SETOR}))
                    setData((prevData) => ({...prevData, name: dataObjectRef['NOME']['PRIMEIRO NOME']}))
                    formStore.update((state) =>{
                        state.username = dataObjectRef['NOME']['PRIMEIRO NOME'] + " " + dataObjectRef['NOME']['SOBRENOME']
                    })
                }
         
            
               }
             } catch (error) {
            console.error('Error fetching data')
        }
        
    }

    function checkSector(){
        // Futuro>>  Precisa-se entender como checar a credencial desse usuario ao logar validando tambem o setor.
        //
    }

    useEffect(() =>{
        FetchData()
}, [uid])


    return (
        <View>
            <Text style={styles.userBox}>{data.name}</Text>
            <Text style={styles.userBox}>{data.sector}</Text>
           
            
        </View>
    )
}

const styles = StyleSheet.create({
    userBox:{
        marginTop: '2%',
        marginRight: '10%',
        alignSelf: 'center',
        fontWeight: '600',
    }
}
)
