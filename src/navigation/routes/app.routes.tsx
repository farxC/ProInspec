import React, {useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../screens/HomePage/HomePage';
import CreateReport from '../../screens/Create_Report/CreateReport';



type AppStackParamList = {
    Home: undefined
}

const AppStack = createNativeStackNavigator<AppStackParamList>();


const configs = {
    "title": "",
    "headerTransparent": true,
    headerShown: false,
}


const AppRoutes = () => (
    <AppStack.Navigator initialRouteName='Home'>
        
        <AppStack.Screen name='Home' options={configs} component={HomePage}/>
        
    </AppStack.Navigator>
)

export default AppRoutes

