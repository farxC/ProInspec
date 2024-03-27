import { database } from "../../../helpers/firebase/connection";
import {ref, get} from 'firebase/database'

export default function registrationUser(registration: string){
    

    async function FetchEnrollment(){
        const record = ref(database, 'matriculas/'+ registration)

        try{
            const snapshot = await get(record)
            if (snapshot.exists()){
                const obj = snapshot.val()
            }
        } catch(error){
            console.error('Error')
        }
    }
  


}