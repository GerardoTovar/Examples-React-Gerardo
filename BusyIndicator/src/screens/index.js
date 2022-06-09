import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BusyIndicator from '../components/BusyIndicator';

const Home = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('Loading');

  const Overlay = async () => {
    setVisible(true);

    //the myInterval mimics the time it takes for the app
    //to communicate with the api, then remove the BusyIndicator
    //with the clearInterval
    let myInterval = setInterval(() => {
      setText('almost');
    }, 1000);
    setTimeout(() => {
      clearInterval(myInterval);
      setVisible(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Text} onPress={() => Overlay()}>
        <Text style={{color: 'black'}}>Log In</Text>
      </TouchableOpacity>
      <BusyIndicator visible={visible} text={text} />
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
