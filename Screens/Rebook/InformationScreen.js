import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

function InformationScreen() {
  const [count, setCount] = useState(1);
  const [gender, setGender] = useState(null);
  const [country, setCountry] = useState(null);
  const [guest, setGuest] = useState(null);
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
  function getBody() {
    switch (count) {
      case 1:
        return (
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
                    style={styles.DropdownStyle}
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
                    style={styles.DropdownStyle}
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
            </ScrollView>
          </View>
        );
    }
  }
  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <View style={styles.BackLogoContainerStyle}>
          <Image source={require('../../images/BackLogo.png')} />
        </View>
        <View style={styles.ProgressBarContainerStyle}>
          <Image source={require(`../../images/progress1.png`)} />
        </View>
        <View>
          <Text style={styles.HeaderCountTextStyle}>{count} / 5</Text>
        </View>
      </View>
      {getBody()}
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
});

export default InformationScreen;
