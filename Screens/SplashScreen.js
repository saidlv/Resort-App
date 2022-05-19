import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

import ScreenContext from '../Context/ScreenContext';

function SplashScreen() {
  const {changeScreen} = useContext(ScreenContext);
  const navigation = useNavigation();
  useEffect(function () {
    const timeout = setTimeout(function () {
      changeScreen('LOGIN');
    }, 2000);

    return function () {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <View style={styles.screen}>
      <Image source={require('../images/Logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
