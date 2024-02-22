import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  useEffect(() => {
    Verify();
  }, []);
  const Verify = () => {
    setTimeout(() => {
      navigation.navigate('CreateAccount');
    }, 2000);
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
      <View style={{position: 'absolute', top: 50, right: 0}}>
        <Image
          style={{height: 250, width: 250}}
          source={require('../../assets/Imagesh/splash_curve1.png')}
        />
      </View>
      <View style={{margin: 0, padding: 10}}>
        <Image
          style={{height: windowHeight, width: windowWidth}}
          source={require('../../assets/Imagesh/splash.png')}
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
