import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../Css/AuthenticationCss/SingInCss';
import {CommonStyles} from '../Css/CommonCss';

const SingIn: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  const HandelBackPress = () => {
    if (navigation.isFocused()) {
      return true;
    }
    return false;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      HandelBackPress,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          position: 'absolute',
          height: windowHeight,
          width: windowWidth,
        }}>
        <Image
          style={{
            height: windowHeight,
            width: windowWidth,
            backgroundColor: 'transparent',
          }}
          source={require('../../assets/Imagesh/body_bg1.png')}
        />
      </View>
      <View style={CommonStyles.center}>
        <Text style={CommonStyles.heading}>Sing In</Text>
        <View style={[CommonStyles.main, {gap: 10}]}>
          <View>
            <View style={CommonStyles.maintextinput}>
              <TextInput
                placeholderTextColor={'#000'}
                placeholder="Your Email"
                style={CommonStyles.textinput}
              />
            </View>
            <View style={CommonStyles.maintextinput}>
              <TextInput
                placeholderTextColor={'#000'}
                placeholder="Enter Password"
                style={CommonStyles.textinput}
              />
            </View>
          </View>
          <View style={CommonStyles.center}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={[CommonStyles.colortext]}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Dashboard')}
            style={[CommonStyles.btn, CommonStyles.center]}>
            <Text style={CommonStyles.btntext}>Continue</Text>
          </TouchableOpacity>
          <View style={CommonStyles.center}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccount')}>
              <Text style={CommonStyles.colortext}>
                Don't have an account? Sing up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SingIn;
