import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Drawer from './src/Drawer/Drawer';


export default function App() {
  return (
   <NavigationContainer>

     <Drawer />

   </NavigationContainer>
  );
}

