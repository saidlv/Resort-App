import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import CheckBox from '@react-native-community/checkbox';

function RoomSelectionScreen() {
  const navigation = useNavigation();
  const [bed, setBed] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const guestList = [
    {label: 'Speaker', value: 'Speaker'},
    {label: 'Learner', value: 'Learner'},
  ];
  const bedList = [
    {label: 'Premium Single Bed', value: '1'},
    {label: 'Premium Double Bed', value: '2'},
  ];
  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <TouchableOpacity
          style={styles.BackLogoContainerStyle}
          onPress={function () {
            navigation.navigate('RebookCompanionInformationScreen');
          }}>
          <Image source={require('../../images/BackLogo.png')} />
        </TouchableOpacity>
        <View style={styles.ProgressBarContainerStyle}>
          <Image source={require(`../../images/progress3.png`)} />
        </View>
        <View>
          <Text style={styles.HeaderCountTextStyle}>3 / 5</Text>
        </View>
      </View>
      <View style={styles.screen}>
        <View style={styles.HeaderTitleContainerStyle}>
          <Text style={styles.HeaderTitleTextStyle}>Room Selection</Text>
        </View>
        <ScrollView style={styles.InformationContainerStyle}>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Select Guest Type</Text>
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
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Select Bed Type</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={bedList}
              onChange={function (item) {
                setBed(item.value);
              }}
              value={bed}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <View style={styles.BookWithoutDateStyle}>
              <View>
                <Switch
                  value={isEnabled}
                  onChange={function () {
                    setIsEnabled(!isEnabled);
                  }}
                  trackColor={{false: '#99A7C7', true: 'green'}}
                  thumbColor="white"
                />
              </View>
              <View>
                <Text style={{...styles.TextInputTitleStyle, marginTop: 5}}>
                  Book without date
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Select Date</Text>
            <TouchableOpacity
              style={styles.TextInputEmailContainerStyle}
              onPress={function () {
                setStartDateOpen(true);
              }}>
              <View>
                <Text style={styles.DateTextStyle}>Start Date</Text>
              </View>
              <View>
                <Text style={styles.DateValueStyle}>
                  {new Date(startDate).toLocaleDateString('en-US', {
                    dateStyle: 'full',
                  })}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.TextInputEmailContainerStyle,
                marginVertical: 5,
              }}
              onPress={function () {
                setEndDateOpen(true);
              }}>
              <View>
                <Text style={styles.DateTextStyle}>End Date</Text>
              </View>
              <View>
                <Text style={styles.DateValueStyle}>
                  {new Date(endDate).toLocaleDateString('en-US', {
                    dateStyle: 'full',
                  })}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <DatePicker
            modal
            mode="date"
            open={startDateOpen}
            date={startDate}
            onConfirm={function (date) {
              setStartDateOpen(false);
              setStartDate(date);
            }}
            onCancel={function () {
              setStartDateOpen(false);
            }}
          />
          <DatePicker
            modal
            mode="date"
            open={endDateOpen}
            date={endDate}
            onConfirm={function (date) {
              setEndDateOpen(false);
              setEndDate(date);
            }}
            onCancel={function () {
              setEndDateOpen(false);
            }}
          />
          <View style={styles.EmailInformationContainerStyle}>
            <View style={styles.GiftContainerStyle}>
              <View style={styles.GiftSubContainerStyle}>
                <View>
                  <Image source={require('../../images/GiftLogo.png')} />
                </View>
                <View>
                  <Text style={styles.GiftTextStyle}>This is a Gift</Text>
                </View>
              </View>
              <View>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={function (newValue) {
                    setToggleCheckBox(newValue);
                  }}
                  tintColors={{true: '#E45525'}}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.SaveAndContinueButtonStyle}
            onPress={function () {
              navigation.navigate('RebookCheckoutScreen');
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  GiftContainerStyle: {
    backgroundColor: '#FDE8E3',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  GiftSubContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  DateTextStyle: {
    color: '#7D8CAC',
    fontSize: 14,
  },
  DateValueStyle: {
    color: '#485470',
    fontSize: 14,
  },
  BookWithoutDateStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 5,
  },
  GiftTextStyle: {
    color: '#E45525',
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default RoomSelectionScreen;
