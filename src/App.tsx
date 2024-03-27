import { useEffect } from 'react';
import Navigator from './navigation/routes/Index';
import './helpers/firebase/connection'
import {AuthRoutes} from './navigation/routes/auth.routes';
import { NavigationContainer } from '@react-navigation/native';


const App =  () => {
  
  return (
    
    <NavigationContainer>
      <Navigator/>
    </NavigationContainer>
    
  )
};

export default App;