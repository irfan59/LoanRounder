import {View, Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import React, {useState} from 'react';
import {CommonStyles} from '../Css/CommonCss';
import SideMenu from 'react-native-side-menu';
import {SidebarMenuData} from './SidebarMenu';

const Header: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
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
      </View>
    </SideMenu>
  );
};

export default Header;
