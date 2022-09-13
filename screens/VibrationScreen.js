import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Vibration,
} from 'react-native';
 
//Duration of the vibration
const DURATION = 8000;
 
const VibrationContent = () => {
  const startVibration = () => {
    //To start the vibration for the defined Duration
    Vibration.vibrate(DURATION);
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          Vibration 
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={startVibration}>
          <Text style={styles.buttonTextStyle}>
            Start Vibration
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
 
export default VibrationContent;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
