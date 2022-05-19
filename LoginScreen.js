import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';

import ScreenContext from './Context/ScreenContext';

function LoginScreen() {
  const {changeScreen} = useContext(ScreenContext);
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <View style={styles.LogoStyle}>
        <Image source={require('./images/Logo.png')} />
      </View>
      <ScrollView
        style={styles.OptionsContainerStyle}
        showsVerticalScrollIndicator={false}>
        <View style={styles.EmailInformationContainerStyle}>
          <Text style={styles.LoginTitleTextStyle}>LOGIN</Text>
        </View>
        <View style={styles.EmailInformationContainerStyle}>
          <Text style={styles.TextInputTitleStyle}>Email</Text>
          <View style={styles.TextInputEmailContainerStyle}>
            <TextInput style={styles.TextInputTextStyle} />
          </View>
        </View>
        <View style={styles.EmailInformationContainerStyle}>
          <Text style={styles.TextInputTitleStyle}>Password</Text>
          <View style={styles.TextInputEmailContainerStyle}>
            <TextInput style={styles.TextInputTextStyle} secureTextEntry />
          </View>
        </View>
        <TouchableOpacity
          style={styles.LoginButtonStyle}
          onPress={function () {
            changeScreen('MAIN');
          }}>
          <Text style={styles.LoginTextStyle}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#212121',
  },
  LoginButtonStyle: {
    backgroundColor: '#E45525',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
  },
  LoginTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  TextInputTitleStyle: {
    color: '#485470',
    fontWeight: 'bold',
    fontSize: 12,
    marginLeft: 5,
  },
  TextInputContainerStyle: {
    backgroundColor: '#F8F9FB',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.5,
  },
  TextInputEmailContainerStyle: {
    backgroundColor: '#F1F4FB',
    borderRadius: 10,
  },
  TextInputTextStyle: {
    color: '#485470',
  },
  EmailInformationContainerStyle: {
    marginVertical: 5,
  },
  LoginTitleTextStyle: {
    color: '#485470',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  LogoStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  OptionsContainerStyle: {
    backgroundColor: '#F1FAF9',
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
    padding: 20,
  },
  TitleTextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  DescriptionTextStyle: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 5,
  },
  OptionContainerStyle: {
    width: '80%',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  OptionSubContainerStyle: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#70CEC2',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 15,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {height: 10, width: 10},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 0.5,
  },
  OptionTextStyle: {
    fontSize: 20,
    color: '#000000',
  },
});

export default LoginScreen;
