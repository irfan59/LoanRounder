import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from '../Css/AuthenticationCss/CreateAccountCss';
import {CommonStyles} from '../Css/CommonCss';

const CreateAccount: React.FC<any> = ({navigation}) => {
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
        <Text style={CommonStyles.heading}>Create Account</Text>
        <View style={[CommonStyles.main, {gap: 10}]}>
          <View>
            <View style={CommonStyles.maintextinput}>
              <TextInput
                placeholderTextColor={'#000'}
                placeholder="Full Name"
                style={CommonStyles.textinput}
              />
            </View>
            <View style={CommonStyles.maintextinput}>
              <TextInput
                placeholderTextColor={'#000'}
                placeholder="Email"
                style={CommonStyles.textinput}
              />
            </View>
            <View style={CommonStyles.maintextinput}>
              <TextInput
                placeholderTextColor={'#000'}
                placeholder="Password"
                style={CommonStyles.textinput}
              />
            </View>
            <View style={CommonStyles.maintextinput}>
              <TextInput
                placeholderTextColor={'#000'}
                placeholder="Confirm Password"
                style={CommonStyles.textinput}
              />
            </View>
          </View>

          <TouchableOpacity style={[CommonStyles.btn, CommonStyles.center]}>
            <Text style={CommonStyles.btntext}>Sing Up</Text>
          </TouchableOpacity>
          <View style={CommonStyles.center}>
            <TouchableOpacity onPress={() => navigation.push('SingIn')}>
              <Text style={CommonStyles.colortext}>
                Already have a account? Sing in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;
