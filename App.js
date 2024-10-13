import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen'; // Import SplashScreen
import LoginScreen from './screens/LoginScreen';
import SignUp from './screens/Sign-up';
import Home from './screens/Home';
import Accounts from './screens/Accounts';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Accounts" component={Accounts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
