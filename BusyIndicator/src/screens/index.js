import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import useBusyIndicator from '../components/BusyIndicator';
//the setTimeout mimics the time it takes for the app
//to communicate with the api
const Home = () => {
  const BusyIndicator = useBusyIndicator();
  const handlerBusyIndicator = async () => {
    BusyIndicator.Texto('Loading');
    BusyIndicator.Visible(true);
    setTimeout(() => {
      BusyIndicator.Texto('Custom Text');
    }, 2000);
    setTimeout(() => {
      BusyIndicator.Visible(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Text}
        onPress={() => handlerBusyIndicator()}>
        <Text style={{color: 'black'}}>Log In</Text>
      </TouchableOpacity>
      {BusyIndicator.Component}
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
