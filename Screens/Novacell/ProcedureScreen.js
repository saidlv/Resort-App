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
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import FacePile from 'react-native-face-pile';

function CompanionInfoScreen() {
  const navigation = useNavigation();
  const [condition, setCondition] = useState(true);
  const [day, setDay] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  const [data, setData] = useState([
    {
      id: 1,
      name: 'Novacell 20 Mil-BP/MP Disc',
      date: 'Mon - Fri',
      time: '09:00 - 17:00',
      price: '$455.00',
    },
    {
      id: 2,
      name: 'Novacell 20 Mil-BP/MP Disc',
      date: 'Mon - Fri',
      time: '09:00 - 17:00',
      price: '$455.00',
    },
    {
      id: 3,
      name: 'Novacell 20 Mil-BP/MP Disc',
      date: 'Mon - Fri',
      time: '09:00 - 17:00',
      price: '$455.00',
    },
  ]);

  const daysList = [
    {label: 'Monday', value: 'Monday'},
    {label: 'Tuesday', value: 'Tuesday'},
    {label: 'Wednesday', value: 'Wednesday'},
    {label: 'Thursday', value: 'Thursday'},
    {label: 'Friday', value: 'Friday'},
    {label: 'Saturday', value: 'Saturday'},
    {label: 'Sunday', value: 'Sunday'},
  ];

  const startTimeList = [
    {label: '00:00', value: '00:00'},
    {label: '01:00', value: '01:00'},
    {label: '02:00', value: '02:00'},
  ];

  const endTimeList = [
    {label: '00:00', value: '00:00'},
    {label: '01:00', value: '01:00'},
    {label: '02:00', value: '02:00'},
  ];

  const FACES = [
    {
      id: 0,
      imageUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
    },
    {
      id: 1,
      imageUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
    },
    {
      id: 2,
      imageUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
    },
    {
      id: 3,
      imageUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
    },
    {
      id: 4,
      imageUrl:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=100',
    },
  ];

  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <TouchableOpacity
          style={styles.BackLogoContainerStyle}
          onPress={function () {
            navigation.navigate('NovacellServiceScreen');
          }}>
          <Image source={require('../../images/BackLogo.png')} />
        </TouchableOpacity>
        <View style={styles.ProgressBarContainerStyle}>
          <Image source={require(`../../images/progress2.png`)} />
        </View>
        <View>
          <Text style={styles.HeaderCountTextStyle}>2 / 5</Text>
        </View>
      </View>
      <View style={styles.screen}>
        <View style={styles.HeaderTitleMainContainerStyle}>
          <View style={styles.HeaderTitleContainerStyle}>
            <View style={styles.HeaderTitleSubContainerStyle}>
              <TouchableOpacity
                onPress={function () {
                  setCondition(true);
                }}
                style={
                  condition
                    ? styles.ActiveTabbarContainerStyle
                    : styles.UnactiveTabbarContainerStyle
                }>
                <Text
                  style={
                    condition
                      ? styles.ActiveTabbarTextStyle
                      : styles.UnactiveTabbarTextStyle
                  }>
                  Previous Schedule
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={function () {
                  setCondition(false);
                }}
                style={
                  !condition
                    ? styles.ActiveTabbarContainerStyle
                    : styles.UnactiveTabbarContainerStyle
                }>
                <Text
                  style={
                    !condition
                      ? styles.ActiveTabbarTextStyle
                      : styles.UnactiveTabbarTextStyle
                  }>
                  Add Appointment
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView style={styles.InformationContainerStyle}>
          {condition ? (
            data.map(function (item) {
              return (
                <View style={styles.ServicesBodyStyle} key={item.id}>
                  <Text style={styles.NameTextStyle}>{item.name}</Text>
                  <View style={styles.DateAndTimeContainerStyle}>
                    <View style={styles.DateContainerStyle}>
                      <Image source={require('../../images/DateLogo.png')} />
                      <Text style={styles.DateTextStyle}>{item.date}</Text>
                    </View>
                    <View style={styles.TimeContainerStyle}>
                      <Image source={require('../../images/TimeLogo.png')} />
                      <Text style={styles.TimeTextStyle}>{item.time}</Text>
                    </View>
                  </View>
                  <View style={styles.MemberAndPriceContainerStyle}>
                    <View>
                      <Text style={styles.MemberTextStyle}>Member</Text>
                      <View>
                        <FacePile numFaces={3} faces={FACES} />
                      </View>
                    </View>
                    <View>
                      <Text style={styles.PriceTextStyle}>Price</Text>
                      <View style={styles.PriceContainerStyle}>
                        <Text style={styles.PriceValueTextStyle}>
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })
          ) : (
            <View>
              <View style={styles.EmailInformationContainerStyle}>
                <Text style={styles.TextInputTitleStyle}>Select day</Text>
                <Dropdown
                  labelField="label"
                  valueField="value"
                  data={daysList}
                  onChange={function (item) {
                    setDay(item.value);
                  }}
                  value={day}
                  style={styles.DropdownStyle}
                  placeholderStyle={{color: 'black'}}
                  selectedTextStyle={{color: 'black'}}
                  maxHeight={110}
                />
              </View>
              <View style={styles.NameInformationContainerStyle}>
                <View>
                  <Text style={styles.TextInputTitleStyle}>Start Time</Text>
                  <Dropdown
                    labelField="label"
                    valueField="value"
                    data={startTimeList}
                    onChange={function (item) {
                      setStartTime(item.value);
                    }}
                    value={startTime}
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
                  <Text style={styles.TextInputTitleStyle}>End Time</Text>
                  <Dropdown
                    labelField="label"
                    valueField="value"
                    data={endTimeList}
                    onChange={function (item) {
                      setEndTime(item.value);
                    }}
                    value={endTime}
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
            </View>
          )}
          <TouchableOpacity
            style={styles.SaveAndContinueButtonStyle}
            onPress={function () {
              navigation.navigate('NovacellCheckoutScreen');
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
  ProcedureBodyContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  DisSelectedItemStyle: {
    backgroundColor: '#F1F4FB',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  DisSelectedTextStyle: {
    color: '#7D8CAC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  SelectedItemStyle: {
    backgroundColor: '#E45525',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  SelectedTextStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  ServicesBodyStyle: {
    borderWidth: 1,
    borderColor: '#D9DDE5',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  NameTextStyle: {
    color: '#485470',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  DateAndTimeContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  DateContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  TimeContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  DateTextStyle: {
    color: '#70CEC2',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  TimeTextStyle: {
    color: '#70CEC2',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  MemberAndPriceContainerStyle: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  MemberTextStyle: {
    color: '#485470',
    fontSize: 14,
  },
  PriceTextStyle: {
    color: '#485470',
    fontSize: 14,
  },
  PriceContainerStyle: {
    backgroundColor: '#E45525',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  PriceValueTextStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  HeaderTitleSubContainerStyle: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#D9DDE5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F1F4FB',
  },
  HeaderTitleMainContainerStyle: {
    paddingVertical: 10,
    width: '90%',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  UnactiveTabbarTextStyle: {
    color: '#7D8CAC',
  },
  ActiveTabbarTextStyle: {
    color: '#E45525',
  },
  UnactiveTabbarContainerStyle: {
    backgroundColor: '#F1F4FB',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  ActiveTabbarContainerStyle: {
    backgroundColor: '#FDE8E3',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E45525',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default CompanionInfoScreen;
