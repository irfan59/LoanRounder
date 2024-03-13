import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from './src/Authentication/SplashScreen';
import CreateAccount from './src/Authentication/CreateAccount';
import SingIn from './src/Authentication/SingIn';
import ForgotPassword from './src/Authentication/ForgotPassword';
import Dashboard from './src/Shared/Dashboard';
import AboutUs from './src/Master/AboutUs';
import TearmCondition from './src/Master/TearmCondition';
import Profile from './src/Master/Profile';
import Analytics from './src/Master/Analytics';
import ConnectBankAccount from './src/Master/ConnectBankAccount';
import Setting from './src/Master/Setting';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SingIn"
          component={SingIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUs"
          component={AboutUs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tearm"
          component={TearmCondition}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Analytics"
          component={Analytics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConnectBankAccount"
          component={ConnectBankAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
