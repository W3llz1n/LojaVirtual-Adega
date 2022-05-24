import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from '../Pages/stack';
import Populares from '../Pages/Populares/index'
import Search from './Search';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const Tab = createBottomTabNavigator();

export default function Routes() {
 return (
    <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarInactiveTintColor: '#fff',
            tabBarActiveTintColor: '#ECA72C',
            tabBarStyle:{
                paddingBottom:5,
                paddingTop:5,
                backgroundColor: '#000',
                borderTopColor: 'transparent'
            },
            headerStyle:{
                backgroundColor: '#000',
                borderBottomColor: 'transparent',
           },
        }}
        >
       <Tab.Screen 
       name="Inicio" 
       component={HomeNavigation}
       options={{
           tabBarIcon:({size,color}) => (
            <Ionicons name="home" size={size} color={color} />
           ),
           headerTintColor: '#fff',
           headerTitleAlign: 'center',
           title: 'TAVERNA DO DRAGÃO',
           headerShown:false,
           
       }}
       />
       <Tab.Screen 
       name="Poulares" 
       component={Populares}
       options={{
        tabBarIcon:({size,color}) => (
            <MaterialIcons name="favorite" size={size} color={color} />
        ),
        headerStyle:{
             backgroundColor: '#000',
             borderBottomColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        title: 'POPULARES',
        }}
       />
       <Tab.Screen 
       name="Busca" 
       component={Search}
       options={{
        tabBarIcon:({size,color}) => (
            <Ionicons name="search" size={size} color={color} />
        ),
        headerStyle:{
             backgroundColor: '#000',
             borderBottomColor: 'transparent',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        title: 'BUSQUE O SEU NÉCTAR',
        }}
       />
    </Tab.Navigator>
  );
}