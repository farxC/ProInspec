import React from 'react';
import { useAuth } from '../../helpers/firebase/useAuth';
import {AuthRoutes} from './auth.routes';
import AppRoutes from './app.routes';


function Navigator(){

    // Instanceia um usuário com base no SignOn form da página de Login
    const {user} = useAuth();
    

    // Lógica Ternária: Usuário? True? -> Acessa rota de demais páginas com o usuário autenticado || False? -> Acessa páginas que não dependem de login, no caso, nenhuma. 
    // ******* DEBUG ONLY ********
    //return <AuthRoutes></AuthRoutes>
    //*************** DEPLOY ONLY******** 
    return user ? <AuthRoutes/> : <AppRoutes/>
}



export default Navigator