import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {CommonStyles} from '../Css/CommonCss';

let windowHeight = Dimensions.get('window').height;
let windowWidth = Dimensions.get('window').width;

const SidebarMenuData: React.FC<any> = ({navigation}) => (
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
        <Image source={require('../../assets/Imagesh/notificationwhite.png')} />
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
      <TouchableOpacity
        style={CommonStyles.sidebarlist}
        onPress={() => navigation.navigate('Tearm')}>
        <Image source={require('../../assets/Imagesh/logoutwhite.png')} />
        <Text style={CommonStyles.sidebartext}>Tearm & Condition</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export {SidebarMenuData}; // Exporting SidebarMenuData as a named export
