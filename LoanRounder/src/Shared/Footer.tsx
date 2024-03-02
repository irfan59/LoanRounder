import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {CommonStyles} from '../Css/CommonCss';

const Footer = (navigation: any) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  return (
    <View
      style={{height: windowHeight, width: windowWidth, position: 'absolute'}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.main}
          onPress={() => navigation.navigate('Dashboard')}>
          <Image
            style={styles.img}
            source={require('../../assets/Imagesh/home.png')}
          />
          <Text style={CommonStyles.text}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.main}>
          <Image
            style={styles.img}
            source={require('../../assets/Imagesh/profile.png')}
          />
          <Text style={CommonStyles.text}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.main}>
          <Image
            style={styles.img}
            source={require('../../assets/Imagesh/transection.png')}
          />
          <Text style={CommonStyles.text}>Round Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.main}>
          <Image
            style={styles.img}
            source={require('../../assets/Imagesh/analytics.png')}
          />
          <Text style={CommonStyles.text}>Analytics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 999,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderColor: 'grey',
  },
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {},
});
