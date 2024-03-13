import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../Css/AuthenticationCss/SingInCss';
import {CommonStyles} from '../Css/CommonCss';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const SingIn: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '728968031594-dup5e936a3p0ikq4687ev1vpi1pq4pb4.apps.googleusercontent.com',
    });
  }, []);
  console.log('opopopopopo');

  const signIn = async () => {
    console.log('iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo: any = await GoogleSignin.signIn();
      console.log('uuuuuuuuuuuuuuuuuuuuuuuuu');

      setUserInfo(userInfo);
      console.log('********************', userInfo);
    } catch (error: any) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
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
            <TouchableOpacity onPress={() => navigation.push('ForgotPassword')}>
              <Text style={[CommonStyles.colortext]}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.push('Dashboard')}
            style={[CommonStyles.btn, CommonStyles.center]}>
            <Text style={CommonStyles.btntext}>Continue</Text>
          </TouchableOpacity>
          <View style={CommonStyles.center}>
            <TouchableOpacity onPress={() => navigation.push('CreateAccount')}>
              <Text style={CommonStyles.colortext}>
                Don't have an account? Sing up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{position: 'absolute', bottom: 100}}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signIn}
          disabled={false}
        />
      </View>
    </View>
  );
};

export default SingIn;
