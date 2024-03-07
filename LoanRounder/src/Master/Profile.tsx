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
import Header from '../Components/Header';
import {SidebarMenuData} from '../Components/SidebarMenu';

const Profile: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideMenu
        menu={<SidebarMenuData navigation={navigation} />}
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
          <View
            style={[
              CommonStyles.padding,
              {
                height: 50,
                justifyContent: 'center',
              },
              ,
            ]}>
            <TouchableOpacity onPress={toggleMenu}>
              <Image source={require('../../assets/Imagesh/menu.png')} />
            </TouchableOpacity>
          </View>

          <View style={CommonStyles.maincontainer}>
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
    </>
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
