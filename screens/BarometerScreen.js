import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { Barometer } from 'expo-sensors';
import { useNavigation } from "@react-navigation/native";


export default function BarometerContent() {
  const [data, setData] = useState({});
const navigation = useNavigation();


  useEffect(() => {
    _toggle();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    this._subscription = Barometer.addListener(barometerData => {
      setData(barometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  const { pressure = 0, relativeAltitude = 0 } = data;

  return (
    <View style={styles.sensor}>
      <Text>Barometer:</Text>
      <Text>Pressure: {pressure * 100} Pa</Text>
      <Text>
        Relative Altitude:{' '}
        {Platform.OS === 'ios' ? `${relativeAltitude} m` : `Only available on iOS`}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={_toggle} style={styles.button}>
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Home")}
        className=" bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg">
          <Icon name="arrow-left" size={40} />
        </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  sensor: {
    marginTop: 45,
    paddingHorizontal: 10,
  },
});