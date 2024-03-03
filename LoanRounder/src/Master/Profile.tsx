import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import SideMenu from 'react-native-side-menu';
import {CommonStyles} from '../Css/CommonCss';
import Footer from '../Shared/Footer';

const Profile: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menu = (
    <View
      style={{
        backgroundColor: '#7415C0',
        width: windowWidth / 1.2,
        height: windowHeight,
      }}>
      <View style={[CommonStyles.center, {marginVertical: 25}]}>
        <Image source={require('../../assets/Imagesh/whitelogo.png')} />
      </View>
      <View style={{padding: 15, gap: 30}}>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/editprofile.png')} />
          <Text style={CommonStyles.sidebartext}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/settingwhite.png')} />
          <Text style={CommonStyles.sidebartext}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/paymentwhite.png')} />
          <Text style={CommonStyles.sidebartext}>Payment Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/loanwhite.png')} />
          <Text style={CommonStyles.sidebartext}>Loan Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/analyticswhite.png')} />
          <Text style={CommonStyles.sidebartext}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/supportwhite.png')} />
          <Text style={CommonStyles.sidebartext}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image
            source={require('../../assets/Imagesh/notificationwhite.png')}
          />
          <Text style={CommonStyles.sidebartext}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/logoutwhite.png')} />
          <Text style={CommonStyles.sidebartext}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={CommonStyles.sidebarlist}
          onPress={() => navigation.navigate('AboutUs')}>
          <Image source={require('../../assets/Imagesh/logoutwhite.png')} />
          <Text style={CommonStyles.sidebartext}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={CommonStyles.sidebarlist}>
          <Image source={require('../../assets/Imagesh/logoutwhite.png')} />
          <Text style={CommonStyles.sidebartext}>Tearm & Condition</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <SideMenu
      menu={menu}
      isOpen={isOpen}
      onChange={(isOpen: any) => setIsOpen(isOpen)}
      openMenuOffset={windowWidth / 1.2}>
      <View
        style={{
          height: windowHeight,
          width: windowWidth,
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
        <View style={[CommonStyles.padding]}>
          <View>
            <TouchableOpacity onPress={toggleMenu}>
              <Image source={require('../../assets/Imagesh/menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={[CommonStyles.center]}>
            <Text style={CommonStyles.headingsmall}>Edit Profile</Text>
            <View>
              <Image
                style={{marginVertical: 20}}
                source={require('../../assets/Imagesh/profileperson.png')}
              />
            </View>
          </View>
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
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.mainbtn}>
            <TouchableOpacity
              style={[
                CommonStyles.btn,
                styles.btn,
                {backgroundColor: 'transparent'},
              ]}>
              <Text style={CommonStyles.colortext}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[CommonStyles.btn, styles.btn]}>
              <Text style={CommonStyles.btntext}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Footer navigation={navigation} />
      </View>
    </SideMenu>
  );
};
const styles = StyleSheet.create({
  mainbtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  btn: {
    borderWidth: 0.5,
    borderColor: '#7415C0',
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Profile;
