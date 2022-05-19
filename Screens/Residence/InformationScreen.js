import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function InformationScreen() {
  return (
    <View style={styles.screen}>
      <Text>InformationScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InformationScreen;
