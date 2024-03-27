import React, { useEffect, useState } from 'react';
import {  onAuthStateChanged, PopupRedirectResolver, User} from 'firebase/auth'
import { database } from './connection';
import {auth} from './connection';
import { firebase } from '@react-native-firebase/auth';
import { PopUp } from '../../components/PopUp';


export function useAuth(){
    const [user, setUser] = useState<User | undefined>();
 

    useEffect(() =>{
        const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
            } else {
                setUser(undefined)
            }
        })

        return unsubscribeFromAuthStateChanged
    }, [])

    return {user}

}
