import React, {useState} from 'react';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../screens/HomePage/HomePage';
import CreateReport from '../../screens/Create_Report/CreateReport';

import Comments from '../../screens/Create_Report/helpersScreens/Comments';
import PhotoReport from '../../screens/Create_Report/helpersScreens/PhotographicReport';
import {Return} from '../../components/Return';
import { FinishReport } from '../../screens/Finish_Report/FinishReport';

export type RootStackParamList = {
    Home: undefined;
    Create: undefined;
    Comments: {form: undefined};
    Photo: undefined;
    Finish: {data: object};
}



const AuthStack = createNativeStackNavigator<RootStackParamList>();


const Default_configs: NativeStackNavigationOptions = {
    title: "",
    headerTransparent: false,
    headerShown: false,
}




export const AuthRoutes = () => (
    <AuthStack.Navigator initialRouteName='Home' screenOptions={Default_configs}>
        <AuthStack.Screen name='Create'  component={CreateReport}  />
        <AuthStack.Screen name='Comments'  component={Comments}></AuthStack.Screen>
        <AuthStack.Screen name='Photo' component={PhotoReport}></AuthStack.Screen>
        <AuthStack.Screen name='Finish' component={FinishReport}></AuthStack.Screen>
    </AuthStack.Navigator>
)


