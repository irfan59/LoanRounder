import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SideMenu from 'react-native-side-menu';
import {SidebarMenuData} from '../Components/SidebarMenu';
import {CommonStyles} from '../Css/CommonCss';
import Modal from 'react-native-modal';
import {
  StripeProvider,
  useFinancialConnectionsSheet,
} from '@stripe/stripe-react-native';

const ConnectBankAccount: React.FC<any> = ({navigation}) => {
  let windowHeight = Dimensions.get('window').height;
  let windowWidth = Dimensions.get('window').width;
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [sessionResult, setSessionResult]: any = useState(null);
  const [error, setError]: any = useState(null);
  const {
    loading,
    collectBankAccountToken,
    collectFinancialConnectionsAccounts,
  } = useFinancialConnectionsSheet();

  const collectFinancialConnectionsAccounts1 = async (clientSecret: any) => {
    // try {
    //   const {session, error} =
    //     await NativeStripeSdk.collectFinancialConnectionsAccounts(clientSecret);

    //   if (error) {
    //     setError(error);
    //     console.error('err', error);
    //     console.error('err', error);
    //   } else {
    //     console.log(session);

    //     setSessionResult(session);
    //   }
    // } catch (error) {
    //   // setError(createError(error));
    //   console.error(error);
    // }
    const {session, error} = await collectFinancialConnectionsAccounts(
      clientSecret,
    );

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
      console.log(error);
    } else {
      Alert.alert('Success');
      console.log(
        'Successfully obtained session: ',
        JSON.stringify(session, null, 2),
      );
    }
  };

  return (
    <>
      <StripeProvider publishableKey="pk_test_51OwGoLAify64hT4ToVYcxvb4TaN11pMwbwaelYLD40yOZ6lHUqZBQJYMZtkLOiptECiGRuhhjk5FPgSlOKQZQEXT001aXBKUbc">
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
              <Text style={CommonStyles.headingsmall}>
                Connect Bank Account
              </Text>
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
                    <Text style={CommonStyles.text}>
                      No bank accounts linked
                    </Text>
                  </View>
                  <View style={styles.tmain}>
                    <Image
                      source={require('../../assets/Imagesh/account.png')}
                    />
                    <Text style={CommonStyles.text}>
                      Connect an account to immediately
                    </Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                // onPress={() => setShowModal(!showModal)}
                onPress={() =>
                  collectFinancialConnectionsAccounts1(
                    'pk_test_51OwGoLAify64hT4ToVYcxvb4TaN11pMwbwaelYLD40yOZ6lHUqZBQJYMZtkLOiptECiGRuhhjk5FPgSlOKQZQEXT001aXBKUbc',
                  )
                }
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
                  <TouchableOpacity onPress={() => navigation.push('Tearm')}>
                    <Text style={[CommonStyles.linktext]}>
                      terms and conditions
                    </Text>
                  </TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
          <>
            <Modal
              style={{margin: 0}}
              isVisible={showModal}
              deviceWidth={windowWidth}
              deviceHeight={windowHeight}
              onBackdropPress={() => setShowModal(!showModal)}>
              <View style={styles.modalmain}>
                <View style={styles.modaltop}>
                  <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/Imagesh/backarrow.png')}
                    />
                  </TouchableOpacity>
                  <Text style={CommonStyles.headingsmall}>Stripe</Text>
                  <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                    <Image
                      style={styles.icon}
                      source={require('../../assets/Imagesh/close.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.modalmiddel}>
                  <Image
                    style={[
                      styles.icon,
                      {position: 'absolute', top: '30%', left: 10},
                    ]}
                    source={require('../../assets/Imagesh/search.png')}
                  />
                  <TextInput
                    style={[styles.input, CommonStyles.textinputtext]}
                    placeholder="Search"
                  />
                </View>
                <ScrollView>
                  <View style={styles.modalbottom}>
                    <TouchableOpacity
                      style={styles.card}
                      onPress={() => setShowLogin(!showLogin)}>
                      <Image
                        source={require('../../assets/Imagesh/Trash/ally-bank-logo1.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                      <Image
                        source={require('../../assets/Imagesh/Trash/Bank-of-America-Emblem1.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                      <Image
                        source={require('../../assets/Imagesh/Trash/BMO-logo1.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                      <Image
                        source={require('../../assets/Imagesh/Trash/Chase_Bank-Logo1.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                      <Image
                        source={require('../../assets/Imagesh/Trash/hsbc1.png')}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card}>
                      <Image
                        source={require('../../assets/Imagesh/Trash/keybank1.png')}
                      />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </Modal>
            <>
              <Modal
                style={{margin: 0}}
                isVisible={showLogin}
                deviceWidth={windowWidth}
                deviceHeight={windowHeight}
                onBackdropPress={() => setShowLogin(!showLogin)}>
                <View style={[styles.modalmain, {height: '70%'}]}>
                  <View style={[styles.modaltop, {marginBottom: 30}]}>
                    <TouchableOpacity onPress={() => setShowLogin(!showLogin)}>
                      <Image
                        style={styles.icon}
                        source={require('../../assets/Imagesh/backarrow.png')}
                      />
                    </TouchableOpacity>
                    <Text style={CommonStyles.headingsmall}>
                      Login to Stripe
                    </Text>
                    <TouchableOpacity onPress={() => setShowLogin(!showLogin)}>
                      <Image
                        style={styles.icon}
                        source={require('../../assets/Imagesh/close.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <TextInput
                      placeholder="Username"
                      placeholderTextColor={'#000'}
                      style={styles.logininput}
                    />
                    <TextInput
                      placeholder="Enter Password"
                      placeholderTextColor={'#000'}
                      style={[styles.logininput, CommonStyles.textinputtext]}
                    />
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
                </View>
              </Modal>
            </>
          </>
          <Footer navigation={navigation} />
        </SideMenu>
      </StripeProvider>
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
  modalmain: {
    backgroundColor: '#fff',
    height: '80%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    padding: 20,
    margin: 0,
  },
  modaltop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalmiddel: {
    marginVertical: 20,
  },
  modalbottom: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '45%',
    height: 120,
    borderWidth: 1,
    borderColor: '#B65BFF',
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
  input: {
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
    paddingLeft: 40,
  },
  logininput: {
    borderWidth: 0.5,
    borderColor: 'grey',
    padding: 10,
    marginVertical: 20,
  },
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
