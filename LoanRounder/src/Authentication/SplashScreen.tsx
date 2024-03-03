import {Dimensions, Image, LogBox, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const SplashScreen: React.FC<any> = ({navigation}) => {
  LogBox.ignoreAllLogs();

  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  useEffect(() => {
    Verify();
  }, []);
  const Verify = () => {
    setTimeout(() => {
      navigation.navigate('SingIn');
    }, 700);
  };
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View>
        <View style={{position: 'absolute', top: 50, right: 0}}>
          <Image
            style={{height: 250, width: 250}}
            source={require('../../assets/Imagesh/splashbg.png')}
          />
        </View>
        <View style={{margin: 0, padding: 10}}>
          <Image
            style={{height: windowHeight, width: windowWidth}}
            source={require('../../assets/Imagesh/splashnew.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
