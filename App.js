import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Pages/routes';
import { AppLoading }  from 'expo';
import {useFonts, Ultra_400Regular} from '@expo-google-fonts/ultra';


export default function App() {

  // let [fontsLoaded] = useFonts({
  //   Antonio_400Regular,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
    
  );
}


