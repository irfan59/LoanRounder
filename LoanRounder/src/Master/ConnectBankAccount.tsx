import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SideMenu from 'react-native-side-menu';
import {SidebarMenuData} from '../Components/SidebarMenu';
import {CommonStyles} from '../Css/CommonCss';

const ConnectBankAccount: React.FC<any> = ({navigation}) => {
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
          <View style={CommonStyles.center}>
            <Text style={CommonStyles.headingsmall}>ConnectBankAccount</Text>
          </View>
          <View
            style={[
              CommonStyles.padding,
              CommonStyles.center,
              {height: windowHeight},
            ]}>
            <View>
              <View style={styles.top}>
                <View style={styles.tmain}>
                  <Image source={require('../../assets/Imagesh/bank.png')} />
                  <Text style={CommonStyles.text}>No bank accounts linked</Text>
                </View>
                <View style={styles.tmain}>
                  <Image source={require('../../assets/Imagesh/account.png')} />
                  <Text style={CommonStyles.text}>
                    Connect an account to immediately
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={[
                CommonStyles.btn,
                CommonStyles.center,
                {marginTop: 30, marginBottom: 10},
              ]}>
              <Text style={CommonStyles.btntext}>Connect Bank Account</Text>
            </TouchableOpacity>
            <View>
              <Text
                style={[
                  CommonStyles.text,
                  {textAlign: 'center', paddingHorizontal: 15},
                ]}>
                Lorem ipsum dolor sit amet consectetur adipisicing.
                <TouchableOpacity onPress={() => navigation.navigate('Tearm')}>
                  <Text style={[CommonStyles.linktext]}>
                    terms and conditions
                  </Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
        <Footer navigation={navigation} />
      </SideMenu>
    </>
  );
};

export default ConnectBankAccount;

const styles = StyleSheet.create({
  top: {
    alignSelf: 'center',
    gap: 10,
  },
  tmain: {
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
