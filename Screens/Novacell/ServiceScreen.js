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

function CheckoutScreen() {
  const navigation = useNavigation();
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
  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <TouchableOpacity
          style={styles.BackLogoContainerStyle}
          onPress={function () {
            navigation.navigate('NovacellGuestScreen');
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
          <Text style={styles.HeaderTitleTextStyle}>Services</Text>
        </View>
        <ScrollView style={styles.InformationContainerStyle}>
          {data.map(function (item) {
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
          })}
          <TouchableOpacity
            style={styles.SaveAndContinueButtonStyle}
            onPress={function () {
              navigation.navigate('NovacellProcedureScreen');
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
  PaymentMethodDisSelectedItemStyle: {
    // marginHorizontal: 10,
    marginHorizontal: 20,
    backgroundColor: '#F1F4FB',
    padding: 10,
    borderRadius: 10,
  },
  PaymentMethodDisSelectedTextStyle: {
    color: '#7D8CAC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  PaymentMethodSelectedItemStyle: {
    marginHorizontal: 20,
    backgroundColor: '#70CEC2',
    padding: 10,
    borderRadius: 10,
  },
  PaymentMethodSelectedTextStyle: {
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
});

export default CheckoutScreen;
