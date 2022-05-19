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
import SmoothPicker from 'react-native-smooth-picker';

function CheckoutScreen() {
  const navigation = useNavigation();
  const [paymentMethod, setPaymentMethod] = useState(null);
  const paymentMethods = ['Credit Card', 'AC', 'Transfer', 'Crypt'];
  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <TouchableOpacity
          style={styles.BackLogoContainerStyle}
          onPress={function () {
            navigation.navigate('NovacellProcedureScreen');
          }}>
          <Image source={require('../../images/BackLogo.png')} />
        </TouchableOpacity>
        <View style={styles.ProgressBarContainerStyle}>
          <Image source={require(`../../images/progress4.png`)} />
        </View>
        <View>
          <Text style={styles.HeaderCountTextStyle}>4 / 5</Text>
        </View>
      </View>
      <View style={styles.screen}>
        <View style={styles.HeaderTitleContainerStyle}>
          <Text style={styles.HeaderTitleTextStyle}>Checkouts</Text>
        </View>
        <ScrollView style={styles.InformationContainerStyle}>
          <View style={styles.EmailInformationContainerStyle}>
            <SmoothPicker
              showsHorizontalScrollIndicator={false}
              activeOpacityButton={0.2}
              selectOnPress
              offsetSelection={(-1 * Dimensions.get('window').width) / 2}
              horizontal
              data={paymentMethods}
              onSelected={function ({index, item}) {
                console.log(index, item);
                setPaymentMethod(index);
              }}
              renderItem={function ({item, index}) {
                return (
                  <View
                    style={
                      index === paymentMethod
                        ? styles.PaymentMethodSelectedItemStyle
                        : styles.PaymentMethodDisSelectedItemStyle
                    }>
                    <Text
                      style={
                        index === paymentMethod
                          ? styles.PaymentMethodSelectedTextStyle
                          : styles.PaymentMethodDisSelectedTextStyle
                      }>
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Card Holder</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput style={styles.TextInputTextStyle} />
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Card Number</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput
                style={styles.TextInputTextStyle}
                placeholder="13 digits"
                placeholderTextColor="#7D8CAC"
              />
            </View>
          </View>
          <View style={styles.NameInformationContainerStyle}>
            <View>
              <Text style={styles.TextInputTitleStyle}>Expiration</Text>
              <View style={styles.TextInputContainerStyle}>
                <TextInput
                  style={styles.TextInputTextStyle}
                  placeholder="MM/YY"
                  placeholderTextColor="#7D8CAC"
                />
              </View>
            </View>
            <View>
              <Text style={styles.TextInputTitleStyle}>Security Code</Text>
              <View style={styles.TextInputContainerStyle}>
                <TextInput style={styles.TextInputTextStyle} />
              </View>
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.TextInputTitleStyle}>Amount</Text>
            <View style={styles.TextInputEmailContainerStyle}>
              <TextInput
                style={styles.TextInputTextStyle}
                placeholder="Select Payment Amount"
                placeholderTextColor="#7D8CAC"
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.SaveAndContinueButtonStyle}
            onPress={function () {
              navigation.navigate('NovacellSignAndCompleteScreen');
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
    // marginHorizontal: 10,
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
});

export default CheckoutScreen;
