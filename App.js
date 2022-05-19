import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ScreenContext from './Context/ScreenContext';

import SplashScreen from './Screens/SplashScreen';
import MainMenuScreen from './Screens/MainMenuScreen';
import RebookGuestScreen from './Screens/Rebook/GuestScreen';
import RebookGeneralInformationScreen from './Screens/Rebook/GeneralInfoScreen';
import RebookCompanionInformationScreen from './Screens/Rebook/CompanionInfoScreen';
import RebookSignAndCompleteScreen from './Screens/Rebook/SignAndCompleteScreen';
import RebookRoomSelectionScreen from './Screens/Rebook/RoomSelectionScreen';
import RebookCheckoutScreen from './Screens/Rebook/CheckoutScreen';
import RebookSalesPersonScreen from './Screens/Rebook/SalesPersonScreen';
import ResidenceGuestScreen from './Screens/Residence/GuestScreen';
import ResidenceGeneralInformationScreen from './Screens/Residence/GeneralInfoScreen';
import ResidenceCheckoutScreen from './Screens/Residence/CheckoutScreen';
import ResidenceSignAndCompleteScreen from './Screens/Residence/SignAndCompleteScreen';
import ResidenceSalesPersonScreen from './Screens/Residence/SalesPersonScreen';
import NovacellGuestScreen from './Screens/Novacell/GuestScreen';
import NovacellSalesPersonScreen from './Screens/Novacell/SalesPersonScreen';
import NovacellSignAndCompleteScreen from './Screens/Novacell/SignAndCompleteScreen';
import NovacellCheckoutScreen from './Screens/Novacell/CheckoutScreen';
import NovacellProcedureScreen from './Screens/Novacell/ProcedureScreen';
import NovacellServiceScreen from './Screens/Novacell/ServiceScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator();

function App() {
  const [screen, setScreen] = useState(null);

  const changeScreen = useCallback(function (screen) {
    setScreen(screen);
  }, []);

  let router;

  if (screen == null) {
    router = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    );
  } else if (screen == 'LOGIN') {
    router = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    );
  } else if (screen == 'MAIN') {
    router = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainMenuScreen" component={MainMenuScreen} />
      </Stack.Navigator>
    );
  } else if (screen == 'REBOOK') {
    router = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="RebookSalesPersonScreen"
          component={RebookSalesPersonScreen}
        />
        <Stack.Screen name="RebookGuestScreen" component={RebookGuestScreen} />
        <Stack.Screen
          name="RebookGeneralInformationScreen"
          component={RebookGeneralInformationScreen}
        />
        <Stack.Screen
          name="RebookCompanionInformationScreen"
          component={RebookCompanionInformationScreen}
        />
        <Stack.Screen
          name="RebookRoomSelectionScreen"
          component={RebookRoomSelectionScreen}
        />
        <Stack.Screen
          name="RebookCheckoutScreen"
          component={RebookCheckoutScreen}
        />
        <Stack.Screen
          name="RebookSignAndCompleteScreen"
          component={RebookSignAndCompleteScreen}
        />
      </Stack.Navigator>
    );
  } else if (screen == 'NOVACELL') {
    router = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="NovacellSalesPersonScreen"
          component={NovacellSalesPersonScreen}
        />
        <Stack.Screen
          name="NovacellGuestScreen"
          component={NovacellGuestScreen}
        />
        <Stack.Screen
          name="NovacellServiceScreen"
          component={NovacellServiceScreen}
        />
        <Stack.Screen
          name="NovacellProcedureScreen"
          component={NovacellProcedureScreen}
        />
        <Stack.Screen
          name="NovacellCheckoutScreen"
          component={NovacellCheckoutScreen}
        />
        <Stack.Screen
          name="NovacellSignAndCompleteScreen"
          component={NovacellSignAndCompleteScreen}
        />
      </Stack.Navigator>
    );
  } else if (screen == 'RESIDENCES') {
    router = (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="ResidenceSalesPersonScreen"
          component={ResidenceSalesPersonScreen}
        />
        <Stack.Screen
          name="ResidenceGuestScreen"
          component={ResidenceGuestScreen}
        />
        <Stack.Screen
          name="ResidenceGeneralInformationScreen"
          component={ResidenceGeneralInformationScreen}
        />
        <Stack.Screen
          name="ResidenceCheckoutScreen"
          component={ResidenceCheckoutScreen}
        />
        <Stack.Screen
          name="ResidenceSignAndCompleteScreen"
          component={ResidenceSignAndCompleteScreen}
        />
      </Stack.Navigator>
    );
  }

  return (
    <ScreenContext.Provider value={{screen, changeScreen}}>
      <NavigationContainer>{router}</NavigationContainer>
    </ScreenContext.Provider>
  );
}

export default App;
