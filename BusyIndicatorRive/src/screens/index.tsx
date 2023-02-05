import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import useBusyIndicator from '../components/BusyIndicator';
//the setTimeout mimics the time it takes for the app
//to communicate with the api and animations
//depending on the api response
const Home = (): JSX.Element => {
  const {BItexto, BIvisible, BIcheck, BIerror, BIreset, BusyIndicator} =
    useBusyIndicator();
  const handlerBusyIndicator = async () => {
    BItexto('Loading Animation');
    BIvisible(true);
    setTimeout(() => {
      BIcheck();
      BItexto('Check Animation');
    }, 2000);
    setTimeout(() => {
      BIreset();
    }, 4000);
    setTimeout(() => {
      BIerror();
      BItexto('Error Animation');
    }, 5000);
    setTimeout(() => {
      BIvisible(false);
    }, 7000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Text} onPress={handlerBusyIndicator}>
        <Text style={{color: 'black'}}>Log In</Text>
      </TouchableOpacity>
      {BusyIndicator}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    backgroundColor: '#33A8FF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 40,
  },
});

export default Home;
