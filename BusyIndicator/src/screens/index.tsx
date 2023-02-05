import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import useBusyIndicator from '../components/BusyIndicator';
//the setTimeout mimics the time it takes for the app
//to communicate with the api
const Home = (): JSX.Element => {
  const {BIVisible, BIText, BusyIndicator} = useBusyIndicator();
  const handlerBusyIndicator = async () => {
    BIText('Loading');
    BIVisible(true);
    setTimeout(() => {
      BIText('Custom Text');
    }, 2000);
    setTimeout(() => {
      BIVisible(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.Text} onPress={handlerBusyIndicator}>
        <Text style={{color: 'black'}}>Log In</Text>
      </Pressable>
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
