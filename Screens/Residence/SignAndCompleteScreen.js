import {useNavigation} from '@react-navigation/native';
import React, {useState, useRef, useContext} from 'react';
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
import SignatureScreen from 'react-native-signature-canvas';

import ScreenContext from '../../Context/ScreenContext';

function SignAndCompleteScreen() {
  const {changeScreen} = useContext(ScreenContext);
  const navigation = useNavigation();
  const signature = useRef();

  return (
    <View style={styles.screen}>
      <View style={styles.HeaderContainerStyle}>
        <TouchableOpacity
          style={styles.BackLogoContainerStyle}
          onPress={function () {
            navigation.navigate('ResidenceCheckoutScreen');
          }}>
          <Image source={require('../../images/BackLogo.png')} />
        </TouchableOpacity>
        <View style={styles.ProgressBarContainerStyle}>
          <Image source={require(`../../images/progress5.png`)} />
        </View>
        <View>
          <Text style={styles.HeaderCountTextStyle}>5 / 5</Text>
        </View>
      </View>
      <View style={styles.screen}>
        <View style={styles.HeaderTitleContainerStyle}>
          <Text style={styles.HeaderTitleTextStyle}>Sign and complete</Text>
        </View>
        <ScrollView style={styles.InformationContainerStyle}>
          <View style={styles.EmailInformationContainerStyle}>
            <View style={styles.TextInputEmailContainerStyle}>
              <View>
                <Text style={styles.DateTextStyle}>Amount</Text>
              </View>
              <View>
                <Text style={styles.DateValueStyle}>$299.00</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.TextInputEmailContainerStyle,
                marginVertical: 5,
              }}>
              <View>
                <Text style={styles.DateTextStyle}>Payment Method</Text>
              </View>
              <View>
                <Text style={styles.DateValueStyle}>Credit Card</Text>
              </View>
            </View>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text style={styles.AgreementTextStyle}>
              I agree to charge my credit card in the above amount and give
              permission to use my previous card if applicable
            </Text>
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <SignatureScreen
              ref={signature}
              onEnd={function () {
                console.log('End Signature');
                signature.current.readSignature();
              }}
              onOK={function (signature) {
                console.log('OK Signature');
                console.log(signature);
              }}
              onGetData={function (data) {
                console.log('get data Signature');
                console.log(data);
              }}
              style={{height: 200, backgroundColor: '#F1F4FB'}}
              penColor="#485470"
            />
          </View>
          <View style={styles.EmailInformationContainerStyle}>
            <Text
              style={styles.RedoSignatureTextStyle}
              onPress={function () {
                signature.current.redo();
              }}>
              Redo Signature
            </Text>
          </View>
          <TouchableOpacity
            style={styles.SaveAndContinueButtonStyle}
            onPress={function () {
              changeScreen('MAIN');
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
  AgreementTextStyle: {
    color: '#7D8CAC',
    fontSize: 14,
  },
  RedoSignatureTextStyle: {
    color: '#485470',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SignAndCompleteScreen;
