import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Input from '../components/atoms/Form/Input';

const Home = () => {
  const [text, onChangeText] = useState('');
  const [text2, onChangeText2] = useState('input selecionado');
  const [text3, onChangeText3] = useState('');
  return (
    <View style={styles.container}>
      <Input
        title="Email *"
        secure
        error={'Input con error'}
        value={text}
        onChangeText={onChangeText}
      />
      <Input title="Name *" value={text2} onChangeText={onChangeText2} />
      <Input title="Last Name *" value={text3} onChangeText={onChangeText3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
