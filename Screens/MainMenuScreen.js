import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ScreenContext from '../Context/ScreenContext';

function MainMenuScreen() {
  const {changeScreen} = useContext(ScreenContext);
  const navigation = useNavigation();
  return (
    <View style={styles.screen}>
      <View style={styles.LogoStyle}>
        <Image source={require('../images/Logo.png')} />
      </View>
      <ScrollView
        style={styles.OptionsContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.TitleTextStyle}>Start the Journey</Text>
        <Text style={styles.DescriptionTextStyle}>
          Lorem is simply dummy text of the printing and typesetting
        </Text>
        <View style={styles.OptionContainerStyle}>
          <TouchableOpacity
            style={styles.OptionSubContainerStyle}
            onPress={function () {
              console.log('Clicked');
              changeScreen('REBOOK');
              // navigation.navigate('MainMenuScreen');
            }}>
            <Image source={require('../images/RebookLogo.png')} />
            <Text style={styles.OptionTextStyle}>Rebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.OptionSubContainerStyle}
            onPress={function () {
              changeScreen('NOVACELL');
            }}>
            <Image source={require('../images/NovacellLogo.png')} />
            <Text style={styles.OptionTextStyle}>Novacell</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.OptionSubContainerStyle}
            onPress={function () {
              changeScreen('RESIDENCES');
            }}>
            <Image source={require('../images/ResidencesLogo.png')} />
            <Text style={styles.OptionTextStyle}>Residences</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#212121',
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

export default MainMenuScreen;
