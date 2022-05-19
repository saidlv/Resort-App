import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';

import ScreenContext from '../../Context/ScreenContext';

const DATA = [
  {
    id: 1,
    name: 'James Robert',
    location: 'United States',
    image: require('../../images/userIcon1.png'),
    backgroundColor: '#F8F9FB',
  },
  {
    id: 2,
    name: 'Michael William',
    location: 'United States',
    image: require('../../images/userIcon2.png'),
    backgroundColor: '#FFFFFF',
  },
  {
    id: 3,
    name: 'James Robert',
    location: 'United States',
    image: require('../../images/userIcon1.png'),
    backgroundColor: '#F8F9FB',
  },
  {
    id: 4,
    name: 'Michael William',
    location: 'United States',
    image: require('../../images/userIcon2.png'),
    backgroundColor: '#FFFFFF',
  },
];

function GuestScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const {changeScreen} = useContext(ScreenContext);
  return (
    <View style={styles.screen}>
      <View style={styles.HeaderMainContainerStyle}>
        <View style={styles.HeaderContainerStyle}>
          <TouchableOpacity
            style={styles.BackLogoContainerStyle}
            onPress={function () {
              navigation.navigate('ResidenceSalesPersonScreen');
            }}>
            <Image source={require('../../images/BackLogo.png')} />
          </TouchableOpacity>
          <View>
            <Text style={styles.HeaderTitleStyle}>Select Guest on Premise</Text>
          </View>
          <View>
            <Image source={require('../../images/QuestionLogo.png')} />
          </View>
        </View>
        <View style={styles.SearchBarContainerStyle}>
          <View style={styles.SearchBarSubContainerStyle}>
            <View style={styles.SearchIconContainerStyle}>
              <Image source={require('../../images/SearchLogo.png')} />
            </View>
            <View style={styles.TextInputContainerStyle}>
              <TextInput
                placeholder="Search"
                style={styles.TextInputStyle}
                placeholderTextColor="#7D8CAC"
                onChangeText={setSearch}
                value={search}
              />
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.BodyContainerStyle}
        showsVerticalScrollIndicator={false}>
        {DATA.filter(function (item) {
          return item.name.indexOf(search) > -1;
        }).length > 0 ? (
          DATA.filter(function (item) {
            return item.name.indexOf(search) > -1;
          }).map(function (item) {
            return (
              <TouchableOpacity
                onPress={function () {
                  navigation.navigate('ResidenceGeneralInformationScreen');
                }}
                key={item.id}
                style={{
                  ...styles.PersonContainerStyle,
                  backgroundColor: item.backgroundColor,
                }}>
                <View style={styles.PersonDetailContainerStyle}>
                  <View style={styles.UserImageStyle}>
                    <Image source={item.image} />
                    <Image
                      source={require('../../images/ScholarLogo.png')}
                      style={styles.ScholarLogoStyle}
                    />
                  </View>
                  <View style={styles.PersonDetailSubContainerStyle}>
                    <Text style={styles.PersonNameStyle}>{item.name}</Text>
                    <View style={styles.PersonLocationContainerStyle}>
                      <Image
                        source={require('../../images/locationIcon.png')}
                      />
                      <Text style={styles.PersonLocationStyle}>
                        {item.location}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.NextIconContainerStyle}>
                  <Image source={require('../../images/nextIcon.png')} />
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View style={styles.NoResultFoundContainerStyle}>
            <Image source={require('../../images/missingLogo.png')} />
            <Text style={styles.NotResultFoundTitleStyle}>
              No result found!
            </Text>
            <Text style={styles.NoResultFoundDescriptionStyle}>
              There is no related person. Try using anther keyword
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  HeaderContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  HeaderMainContainerStyle: {
    paddingBottom: 10,
  },
  HeaderTitleStyle: {
    color: '#485470',
    fontSize: 20,
    fontWeight: 'bold',
  },
  BackLogoContainerStyle: {
    marginTop: 5,
  },
  SearchBarContainerStyle: {
    width: '90%',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  SearchBarSubContainerStyle: {
    backgroundColor: '#F8F9FB',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  TextInputContainerStyle: {
    width: Dimensions.get('window').width / 1.5,
  },
  SearchIconContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 5,
  },
  TextInputStyle: {
    borderWidth: 0,
    color: '#7D8CAC',
  },
  PersonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  PersonDetailContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  PersonDetailSubContainerStyle: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  PersonNameStyle: {
    color: '#485470',
    fontSize: 14,
    fontWeight: 'bold',
  },
  PersonLocationStyle: {
    color: '#7D8CAC',
    fontSize: 10,
    marginLeft: 5,
  },
  NextIconContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  PersonLocationContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  NoResultFoundContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  NotResultFoundTitleStyle: {
    color: '#485470',
    fontWeight: 'bold',
    fontSize: 20,
  },
  NoResultFoundDescriptionStyle: {
    color: '#7D8CAC',
    fontSize: 16,
  },
  UserImageStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  ScholarLogoStyle: {
    right: 10,
  },
});

export default GuestScreen;
