import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <View>
      <View><Image style={{height:50,width:50}} source={require('../../assets/Imagesh/splash_bg1.png')}/></View>
      <View></View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})