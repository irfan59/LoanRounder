import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {CommonStyles} from '../Css/CommonCss';
import Footer from '../Shared/Footer';
import {SidebarMenuData} from '../Components/SidebarMenu';
import SideMenu from 'react-native-side-menu';
import Header from '../Components/Header';

const TearmCondition: React.FC<any> = ({navigation}) => {
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

          <View style={[CommonStyles.padding, {gap: 10}]}>
            <View style={[CommonStyles.center, {marginVertical: 20}]}>
              <Text style={CommonStyles.heading}>Terms and Conditions</Text>
            </View>
            <Text style={CommonStyles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              necessitatibus commodi doloribus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sequi necessitatibus commodi
              doloribus.
            </Text>
            <Text style={CommonStyles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              necessitatibus commodi doloribus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sequi necessitatibus commodi
              doloribus.
            </Text>
            <Text style={CommonStyles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              necessitatibus commodi doloribus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sequi necessitatibus commodi
              doloribus.
            </Text>
            <Text style={CommonStyles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              necessitatibus commodi doloribus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sequi necessitatibus commodi
              doloribus.
            </Text>
            <Text style={CommonStyles.text}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
              necessitatibus commodi doloribus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Sequi necessitatibus commodi
              doloribus.
            </Text>
          </View>
          <Footer navigation={navigation} />
        </View>
      </SideMenu>
    </>
  );
};

export default TearmCondition;
