import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from "react-native-screens"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"
import MealsNav from "./nav/Mealnav"

enableScreens()

function getFonts(){
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  })
}

export default function App() {
  const [loadFonts, setLoadFonts]=useState(false)

  if(!loadFonts)
    return <AppLoading startAsync={getFonts} onFinish={()=>setLoadFonts(true)} onError={err=>console.log(err)}/>

  return (
    <>
      <StatusBar style="inverted" />
      <MealsNav/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
