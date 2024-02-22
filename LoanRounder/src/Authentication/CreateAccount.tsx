import {View, Text, Dimensions, Image, TextInput} from 'react-native';
import React from 'react';
import {styles} from '../Css/AuthenticationCss/CreateAccountCss';

const CreateAccount = () => {
  let windowHeight = Dimensions.get('window').height;
  let windowHWidth = Dimensions.get('window').width;
  return (
    <View
      style={{
        height: windowHeight,
        width: windowHWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          position: 'absolute',
          height: windowHeight,
          width: windowHWidth,
        }}>
        <Image
          style={{
            height: windowHeight,
            width: windowHWidth,
            backgroundColor: 'transparent',
          }}
          source={require('../../assets/Imagesh/body_bg1.png')}
        />
      </View>
      <View>
        <Text style={styles.heading}>Create Account</Text>
        <View style={styles.maintextinput}>
          <TextInput placeholder="Full Name" style={styles.textinput} />
        </View>
      </View>
    </View>
  );
};

export default CreateAccount;
