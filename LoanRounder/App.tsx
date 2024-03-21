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

// import React, {useEffect, useState} from 'react';
// import {View, Text, Button, Modal, Alert} from 'react-native';
// import NativeStripeSdk, {
//   StripeProvider,
//   useFinancialConnectionsSheet,
// } from '@stripe/stripe-react-native';

// const App = () => {
//   const [sessionResult, setSessionResult]: any = useState(null);
//   const [error, setError]: any = useState(null);
//   const {
//     loading,
//     collectBankAccountToken,
//     collectFinancialConnectionsAccounts,
//   } = useFinancialConnectionsSheet();

//   useEffect(() => {
//     collectFinancialConnectionsAccounts1(
//       'sk_test_51OvXVWP5wcZI5E8ERQA8b5tV6Rigat8KSaF9P2XF0rzMBjQgIMAEv4CduoX4j0B3Hws8DqK39J79tO1cujC0qNEk00wByFGBdO',
//     );
//   }, []);
//   const collectFinancialConnectionsAccounts1 = async (clientSecret: any) => {
//     // try {
//     //   const {session, error} =
//     //     await NativeStripeSdk.collectFinancialConnectionsAccounts(clientSecret);

//     //   if (error) {
//     //     setError(error);
//     //     console.error('err', error);
//     //     console.error('err', error);
//     //   } else {
//     //     console.log(session);

//     //     setSessionResult(session);
//     //   }
//     // } catch (error) {
//     //   // setError(createError(error));
//     //   console.error(error);
//     // }
//     const {session, error} = await collectFinancialConnectionsAccounts(
//       clientSecret,
//     );

//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//       console.log(error);
//     } else {
//       Alert.alert('Success');
//       console.log(
//         'Successfully obtained session: ',
//         JSON.stringify(session, null, 2),
//       );
//     }
//   };

//   return (
//     <StripeProvider publishableKey="pk_test_51OwGoLAify64hT4ToVYcxvb4TaN11pMwbwaelYLD40yOZ6lHUqZBQJYMZtkLOiptECiGRuhhjk5FPgSlOKQZQEXT001aXBKUbc"></StripeProvider>
//   );
// };

// export default App;
