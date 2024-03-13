import {View, Text, Dimensions, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {SidebarMenuData} from '../Components/SidebarMenu';
import SideMenu from 'react-native-side-menu';
import Header from '../Components/Header';
import {CommonStyles} from '../Css/CommonCss';
import Footer from '../Components/Footer';
import {BarChart, LineChart} from 'react-native-chart-kit';
const Analytics: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
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
            <Text style={CommonStyles.text}>Analytics</Text>
            <BarChart
              data={data}
              width={windowWidth - 100}
              height={220}
              // yAxisLabel="$"
              chartConfig={{
                backgroundColor: '#888888',
                backgroundGradientFrom: '#575757',
                backgroundGradientTo: '#cbcbcb',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '1',
                  stroke: '#000000',
                },
              }}
              verticalLabelRotation={30}
            />
            <LineChart
              data={data}
              width={windowWidth - 50}
              height={220}
              chartConfig={{
                backgroundColor: '#888888',
                backgroundGradientFrom: '#575757',
                backgroundGradientTo: '#cbcbcb',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '4',
                  strokeWidth: '4',
                  stroke: '#000000',
                },
              }}
            />
          </View>
          <Footer navigation={navigation} />
        </View>
      </SideMenu>
    </>
  );
};

export default Analytics;
