import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {CommonStyles} from '../Css/CommonCss';

const ForgotPassword = () => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
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
        <Text style={CommonStyles.heading}>Forgot Password?</Text>
        <Text style={CommonStyles.text}>
          Enter your email or phone to reset your password
        </Text>
        <View style={[CommonStyles.main, {gap: 10}]}>
          <View>
            <View style={CommonStyles.maintextinput}>
              <TextInput
                placeholderTextColor={'#000'}
                placeholder="Your Email"
                style={CommonStyles.textinput}
              />
            </View>
          </View>

          <TouchableOpacity style={[CommonStyles.btn, CommonStyles.center]}>
            <Text style={CommonStyles.btntext}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
