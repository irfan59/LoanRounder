import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../Components/Footer';
import {CommonStyles} from '../Css/CommonCss';
import SideMenu from 'react-native-side-menu';
import {styles} from '../Css/Shared/DashboardCss';
import {SidebarMenuData} from '../Components/SidebarMenu';
import Header from '../Components/Header';
import {BarChart} from 'react-native-chart-kit';
const Dashboard: React.FC<any> = ({navigation}) => {
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
          <View style={CommonStyles.padding}>
            <View style={styles.top}>
              <View
                style={[
                  CommonStyles.center,
                  styles.tcard,
                  {backgroundColor: '#FFDAFB'},
                ]}>
                <Text style={styles.tcardheading}>Round Ups</Text>
                <Text style={styles.tcardtext}>This Month</Text>
                <Text style={styles.tcardamount}>$10.00</Text>
              </View>
              <View
                style={[
                  CommonStyles.center,
                  styles.tcard,
                  {backgroundColor: '#D7FDDD'},
                ]}>
                <Text style={styles.tcardheading}>All-Time</Text>
                <Text style={styles.tcardtext}>Total Round Ups</Text>
                <Text style={styles.tcardamount}>$100.00</Text>
              </View>
            </View>
            <View style={styles.midd}>
              <Text style={styles.mheading}>Recent Payments</Text>
              <ScrollView>
                <View style={styles.mlist}>
                  <View style={[CommonStyles.center, styles.mlmain]}>
                    <Text style={styles.mlleft}>Lorem, ipsum.</Text>
                    <Text style={styles.mlrigth}>$100.00</Text>
                  </View>
                  <View style={[CommonStyles.center, styles.mlmain]}>
                    <Text style={styles.mlleft}>Lorem, ipsum.</Text>
                    <Text style={styles.mlrigth}>$100.00</Text>
                  </View>
                  <View style={[CommonStyles.center, styles.mlmain]}>
                    <Text style={styles.mlleft}>Lorem, ipsum.</Text>
                    <Text style={styles.mlrigth}>$100.00</Text>
                  </View>
                  <View style={[CommonStyles.center, styles.mlmain]}>
                    <Text style={styles.mlleft}>Lorem, ipsum.</Text>
                    <Text style={styles.mlrigth}>$100.00</Text>
                  </View>
                  <View style={[CommonStyles.center, styles.mlmain]}>
                    <Text style={styles.mlleft}>Lorem, ipsum.</Text>
                    <Text style={styles.mlrigth}>$100.00</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.bottom}>
              <BarChart
                data={data}
                width={windowWidth - 28}
                height={220}
                // yAxisLabel="$"
                chartConfig={{
                  backgroundColor: '#888888',
                  backgroundGradientFrom: '#575757',
                  backgroundGradientTo: '#cbcbcb',
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
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
            </View>
          </View>
          <Footer navigation={navigation} />
        </View>
      </SideMenu>
    </>
  );
};

export default Dashboard;
