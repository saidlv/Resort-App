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
import DatePicker from 'react-native-date-picker';

import ScreenContext from '../../Context/ScreenContext';

function GeneralInfoScreen() {
  const navigation = useNavigation();
  const {changeScreen} = useContext(ScreenContext);
  const [status, setStatus] = useState(null);
  const [subdivision, setSubdivision] = useState(null);
  const [phase, setPhase] = useState(null);
  const [referred, setReferred] = useState(null);
  const [lot, setLot] = useState(null);
  const [house, setHouse] = useState(null);
  const [sold, setSold] = useState(null);
  const [conditioned, setConditioned] = useState(null);
  const [extras, setExtras] = useState(null);
  const [soldDate, setSoldDate] = useState(new Date());
  const [soldDateOpen, setSoldDateOpen] = useState(false);
  const [cancelDate, setCancelDate] = useState(new Date());
  const [cancelDateOpen, setCancelDateOpen] = useState(false);
  const [optionDate, setOptionDate] = useState(new Date());
  const [optionDateOpen, setOptionDateOpen] = useState(false);
  const statusList = [
    {label: 'status 1', value: '1'},
    {label: 'status 2', value: '2'},
  ];
  const subdivisionList = [
    {label: 'Subdivision 1', value: '1'},
    {label: 'Subdivision 2', value: '2'},
  ];
  const phaseList = [
    {label: 'Phase 1', value: '1'},
    {label: 'Phase 2', value: '2'},
  ];
  const lotList = [
    {label: 'Lot 1', value: '1'},
    {label: 'Lot 2', value: '2'},
  ];
  const houseList = [
    {label: 'House 1', value: '1'},
    {label: 'House 2', value: '2'},
  ];
  const soldList = [
    {label: 'Sold 1', value: '1'},
    {label: 'Sold 2', value: '2'},
  ];
  const conditionedList = [
    {label: 'Conditioned 1', value: '1'},
    {label: 'Conditioned 2', value: '2'},
  ];
  const extrasList = [
    {label: 'Extras 1', value: '1'},
    {label: 'Extras 2', value: '2'},
  ];
  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <TouchableOpacity
          style={styles.BackLogoContainerStyle}
          onPress={function () {
            navigation.navigate('ResidenceGuestScreen');
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
          <View style={styles.ProfileContainerStyle}>
            <Image source={require('../../images/ProfileImage.png')} />
            <Text style={styles.NameTextStyle}>James Robert - 14876</Text>
            <Text style={styles.BalanceTextStyle}>Balance: $0.00</Text>
          </View>
          <View style={styles.HorizontalLineStyle}></View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Status</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={statusList}
              onChange={function (item) {
                setStatus(item.value);
              }}
              value={status}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Subdivision</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={subdivisionList}
              onChange={function (item) {
                setSubdivision(item.value);
              }}
              value={subdivision}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Phase</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={phaseList}
              onChange={function (item) {
                setPhase(item.value);
              }}
              value={phase}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Lot</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={lotList}
              onChange={function (item) {
                setLot(item.value);
              }}
              value={lot}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>House Type</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={houseList}
              onChange={function (item) {
                setHouse(item.value);
              }}
              value={house}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Sold By</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={soldList}
              onChange={function (item) {
                setSold(item.value);
              }}
              value={sold}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <DatePicker
            modal
            mode="date"
            open={soldDateOpen}
            date={soldDate}
            onConfirm={function (date) {
              setSoldDateOpen(false);
              setSoldDate(date);
            }}
            onCancel={function () {
              setSoldDateOpen(false);
            }}
          />
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Date Sold</Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.TextInputEmailContainerStyle1,
              marginVertical: 5,
            }}
            onPress={function () {
              setSoldDateOpen(true);
            }}>
            <View>
              <Text style={styles.DateTextStyle}>
                {new Date(soldDate).toLocaleDateString('en-US', {
                  dateStyle: 'full',
                })}
              </Text>
            </View>
            <View>
              <Image source={require('../../images/DateLogo.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Purchase Price</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput style={styles.TextInputTextStyle} />
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Conditioned</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={conditionedList}
              onChange={function (item) {
                setConditioned(item.value);
              }}
              value={conditioned}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <DatePicker
            modal
            mode="date"
            open={cancelDateOpen}
            date={cancelDate}
            onConfirm={function (date) {
              setCancelDateOpen(false);
              setCancelDate(date);
            }}
            onCancel={function () {
              setCancelDateOpen(false);
            }}
          />
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Canceled</Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.TextInputEmailContainerStyle1,
              marginVertical: 5,
            }}
            onPress={function () {
              setCancelDateOpen(true);
            }}>
            <View>
              <Text style={styles.DateTextStyle}>
                {new Date(cancelDate).toLocaleDateString('en-US', {
                  dateStyle: 'full',
                })}
              </Text>
            </View>
            <View>
              <Image source={require('../../images/DateLogo.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Extras</Text>
            <Dropdown
              labelField="label"
              valueField="value"
              data={extrasList}
              onChange={function (item) {
                setExtras(item.value);
              }}
              value={extras}
              style={styles.DropdownStyle}
              placeholderStyle={{color: 'black'}}
              selectedTextStyle={{color: 'black'}}
              maxHeight={110}
              placeholder="Select"
            />
          </View>
          <DatePicker
            modal
            mode="date"
            open={optionDateOpen}
            date={optionDate}
            onConfirm={function (date) {
              setOptionDateOpen(false);
              setOptionDate(date);
            }}
            onCancel={function () {
              setOptionDateOpen(false);
            }}
          />
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Options Send</Text>
          </View>
          <TouchableOpacity
            style={{
              ...styles.TextInputEmailContainerStyle1,
              marginVertical: 5,
            }}
            onPress={function () {
              setOptionDateOpen(true);
            }}>
            <View>
              <Text style={styles.DateTextStyle}>
                {new Date(optionDate).toLocaleDateString('en-US', {
                  dateStyle: 'full',
                })}
              </Text>
            </View>
            <View>
              <Image source={require('../../images/DateLogo.png')} />
            </View>
          </TouchableOpacity>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Add Note</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput
                style={{...styles.TextInputTextStyle, textAlignVertical: 'top'}}
                multiline
                numberOfLines={5}
                placeholder="Type Here ..."
                placeholderTextColor="#7D8CAC"
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.SaveAndContinueButtonStyle}
            onPress={function () {
              navigation.navigate('ResidenceCheckoutScreen');
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
  TextInputEmailContainerStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
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
  ProfileContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  NameTextStyle: {
    color: '#485470',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  BalanceTextStyle: {
    color: '#7D8CAC',
    fontSize: 16,
  },
  HorizontalLineStyle: {
    borderWidth: 0.5,
    borderColor: '#D9DDE5',
    marginVertical: 5,
  },
  DateTextStyle: {
    color: '#7D8CAC',
    fontSize: 14,
  },
});

export default GeneralInfoScreen;
