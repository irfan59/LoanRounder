import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Switch,
  TextInput,
  PixelRatio,
} from 'react-native';
import React, {useState} from 'react';
import SideMenu from 'react-native-side-menu';
import {SidebarMenuData} from '../Components/SidebarMenu';
import {CommonStyles} from '../Css/CommonCss';
import Slider from 'rn-range-slider';
import Footer from '../Components/Footer';

const Setting: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  const fontScale = PixelRatio.getFontScale();
  const getFontSize = (size: any) => size / fontScale;

  const [isOpen, setIsOpen] = useState(false);
  const [weekly, setWeekly] = useState(false);
  const [notification, setNotification] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [rangeValue, setRangeValue] = useState({min: 0, max: 50});

  const handleSliderChange = (values: any) => {
    setRangeValue(values);
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
            ]}>
            <TouchableOpacity onPress={toggleMenu}>
              <Image source={require('../../assets/Imagesh/menu.png')} />
            </TouchableOpacity>
          </View>
          <View style={CommonStyles.center}>
            <Text style={CommonStyles.headingsmall}>Settings</Text>
          </View>
          <View style={CommonStyles.padding}>
            <Text style={[styles.mheading, {fontSize: getFontSize(15)}]}>
              Round up Payment
            </Text>
            <View style={styles.switch}>
              <View style={styles.switchmain}>
                <Text style={CommonStyles.text}>Weekly</Text>
                <Switch
                  trackColor={{false: '#DBD9D9', true: '#B65BFF'}}
                  thumbColor={true ? '#fff' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setWeekly(!weekly)}
                  value={weekly}
                />
              </View>
            </View>
            <View>
              <Text style={CommonStyles.text}>
                Determine your monthly round-up limits
              </Text>
              <Text>
                Range Value: {rangeValue.min} - {rangeValue.max}
              </Text>
              {/* <Slider
                min={0}
                max={100}
                step={1}
                floatingLabel
                renderThumb={()=>{}}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
              /> */}
              <View>
                <Text style={CommonStyles.text}>Refer a Friend</Text>
                <View style={CommonStyles.maintextinput}>
                  <TextInput
                    style={[CommonStyles.textinput, {backgroundColor: '#fff'}]}
                    placeholder="Email Address"
                  />
                </View>
              </View>
              <View style={styles.switch}>
                <View style={styles.switchmain}>
                  <Text style={CommonStyles.text}>Enable Notification</Text>
                  <Switch
                    trackColor={{false: '#DBD9D9', true: '#B65BFF'}}
                    thumbColor={true ? '#fff' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={() => setNotification(!notification)}
                    value={notification}
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={[
                CommonStyles.btn,
                CommonStyles.center,
                {
                  marginTop: 30,
                  marginBottom: 10,
                  width: 150,
                  alignSelf: 'center',
                },
              ]}>
              <Text style={CommonStyles.btntext}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer navigation={navigation} />
      </SideMenu>
    </>
  );
};
const styles = StyleSheet.create({
  switchmain: {
    // elevation: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  switch: {
    elevation: 3,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 5,
    marginVertical: 20,
  },
  mheading: {
    fontWeight: '600',
    color: '#000',
  },
});

export default Setting;
