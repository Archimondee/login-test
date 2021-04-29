import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {RootStackParamList} from 'src/types/NavigatorTypes';
import LoginScreen from 'screens/LoginScreen/LoginScreen';
import SignupScreen from 'screens/SignupScreen/SignupScreen';
import ForgotPasswordScreen from 'screens/ForgotPasswordScreen/ForgotPasswordScreen';
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import CreditScreen from 'screens/CreditScreen/CreditScreen';
import CreditInfoScreen from 'screens/CreditInfoScreen/CreditInfoScreen';

const Main = createStackNavigator<RootStackParamList>();

const options: StackNavigationOptions = {
  //headerTintColor: '#65b6e5',
  headerBackTitleVisible: false,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontSize: 14,
    color: '#4a4a4a',
  },
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const MainNavigator = () => {
  return (
    <Main.Navigator screenOptions={options}>
      <Main.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Signup"
        component={SignupScreen}
        options={{
          title: 'Daftar',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Main.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: 'Lupa password',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Main.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      {/* <Main.Screen
        name="Credit"
        component={CreditScreen}
        options={{title: 'Kredit Multiguna'}}
      />
      <Main.Screen
        name="CreditInfo"
        component={CreditInfoScreen}
        options={{title: 'Kredit'}}
      /> */}
    </Main.Navigator>
  );
};

export default MainNavigator;
