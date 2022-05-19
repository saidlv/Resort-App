import {useNavigation} from '@react-navigation/native';
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import ScreenContext from '../../Context/ScreenContext';

function GeneralInfoScreen() {
  const navigation = useNavigation();
  const {changeScreen} = useContext(ScreenContext);
  const [gender, setGender] = useState(null);
  const [country, setCountry] = useState(null);
  const [guest, setGuest] = useState(null);
  const [referred, setReferred] = useState(null);
  const genderList = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
  ];
  const countryList = [
    {label: 'United States', value: 'USA'},
    {label: 'India', value: 'IND'},
  ];
  const guestList = [
    {label: 'Speaker', value: 'Speaker'},
    {label: 'Learner', value: 'Learner'},
  ];
  const referredList = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
  ];
  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <TouchableOpacity
          style={styles.BackLogoContainerStyle}
          onPress={function () {
            navigation.navigate('RebookGuestScreen');
          }}>
          <Image source={require('../../images/BackLogo.png')} />
        </TouchableOpacity>
        <View style={styles.ProgressBarContainerStyle}>
          <Image source={require(`../../images/progress1.png`)} />
        </View>
        <View>
          <Text style={styles.HeaderCountTextStyle}>1 / 5</Text>
        </View>
      </View>
      <View style={styles.screen}>
        <View style={styles.HeaderTitleContainerStyle}>
          <Text style={styles.HeaderTitleTextStyle}>General Info</Text>
        </View>
        <ScrollView style={styles.InformationContainerStyle}>
          <View style={styles.NameInformationContainerStyle}>
            <View>
              <Text style={styles.TextInputTitleStyle}>First Name</Text>
              <View style={styles.TextInputContainerStyle}>
                <TextInput style={styles.TextInputTextStyle} />
              </View>
            </View>
            <View>
              <Text style={styles.TextInputTitleStyle}>Last Name</Text>
              <View style={styles.TextInputContainerStyle}>
                <TextInput style={styles.TextInputTextStyle} />
              </View>
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Email</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput style={styles.TextInputTextStyle} />
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Phone Number</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput style={styles.TextInputTextStyle} />
            </View>
          </View>
          <View style={styles.NameInformationContainerStyle}>
            <View>
              <Text style={styles.TextInputTitleStyle}>Gender</Text>
              <Dropdown
                labelField="label"
                valueField="value"
                data={genderList}
                onChange={function (item) {
                  setGender(item.value);
                }}
                value={gender}
                style={{
                  ...styles.DropdownStyle,
                  width: Dimensions.get('window').width / 2.5,
                }}
                placeholderStyle={{color: 'black'}}
                selectedTextStyle={{color: 'black'}}
                maxHeight={110}
              />
            </View>
            <View>
              <Text style={styles.TextInputTitleStyle}>Guest Type</Text>
              <Dropdown
                labelField="label"
                valueField="value"
                data={guestList}
                onChange={function (item) {
                  setGuest(item.value);
                }}
                value={guest}
                style={{
                  ...styles.DropdownStyle,
                  width: Dimensions.get('window').width / 2.5,
                }}
                placeholderStyle={{color: 'black'}}
                selectedTextStyle={{color: 'black'}}
                maxHeight={110}
              />
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Address</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput style={styles.TextInputTextStyle} />
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>City</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput style={styles.TextInputTextStyle} />
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Country</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={countryList}
              onChange={function (item) {
                setCountry(item.value);
              }}
              value={country}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
            />
          </View>
          <View style={styles.NameInformationContainerStyle}>
            <View>
              <Text style={styles.TextInputTitleStyle}>Postal</Text>
              <View style={styles.TextInputContainerStyle}>
                <TextInput style={styles.TextInputTextStyle} />
              </View>
            </View>
            <View>
              <Text style={styles.TextInputTitleStyle}>State</Text>
              <View style={styles.TextInputContainerStyle}>
                <TextInput style={styles.TextInputTextStyle} />
              </View>
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Referred By</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={referredList}
              onChange={function (item) {
                setReferred(item.value);
              }}
              value={referred}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
            />
          </View>
          <TouchableOpacity
            style={styles.SaveAndContinueButtonStyle}
            onPress={function () {
              navigation.navigate('RebookCompanionInformationScreen');
            }}>
            <Text style={styles.SaveAndContinueTextStyle}>
              Save & Continute
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  HeaderContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  HeaderCountTextStyle: {
    color: '#99A7C7',
  },
  ProgressBarContainerStyle: {
    marginTop: 5,
  },
  HeaderTitleTextStyle: {
    color: '#485470',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  HeaderTitleContainerStyle: {
    backgroundColor: '#F8F9FB',
    paddingVertical: 10,
  },
  InformationContainerStyle: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 10,
  },
  NameInformationContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
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
    backgroundColor: '#F8F9FB',
    borderRadius: 10,
  },
  TextInputTextStyle: {
    color: '#485470',
  },
  EmailInformationContainerStyle: {
    marginVertical: 5,
  },
  DropdownStyle: {
    backgroundColor: '#F8F9FB',
    borderRadius: 10,
    padding: 10,
  },
  SaveAndContinueButtonStyle: {
    backgroundColor: '#E45525',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 20,
  },
  SaveAndContinueTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GeneralInfoScreen;
