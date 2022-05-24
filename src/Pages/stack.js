import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/Home/index'
import Detalhes from './Detalhes';
import {Ionicons} from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function Pages() {
 return (
   <Stack.Navigator>
       <Stack.Screen
        name='Home'
        component={Home}
        options={{
          headerStyle:{
            backgroundColor: "#000",
            borderBottomColor: 'transparent',
          },
            headerShown:true,
            headerTitleAlign: 'center',
            headerTintColor: '#FFF',
            title:'TAVERNA DO DRAGÃO',
            headerLeft: () =>(
                  <FontAwesome5 
                  name="dragon" 
                  size={26} 
                  color="#fff" 
                  style={{marginLeft: 20}}/>
            )
        }}
       />
       <Stack.Screen
        name='Detalhes'
        component={Detalhes}
        options={{
          headerStyle:{
            backgroundColor: "#000",
            borderBottomColor: 'transparent',
          },
          headerTintColor:"#fff",
          headerRight: () =>(
            <AntDesign name="shoppingcart" size={24} color="#fff" style={{marginRight: 20}}/>
      )
        }}
       />
   </Stack.Navigator>
  );
}