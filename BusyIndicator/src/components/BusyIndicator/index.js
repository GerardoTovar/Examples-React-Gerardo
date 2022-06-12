import React, {useState} from 'react';
import {Modal, ActivityIndicator, Text, View} from 'react-native';
import Styles from './Styles';

const useBusyIndicator = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');

  const Texto = string => setText(string);
  const Visible = boolean => setVisible(boolean);

  const Component = (
    <Modal visible={visible} transparent={true}>
      <View style={Styles.container}>
        <View style={Styles.background}>
          <ActivityIndicator color="#33A8FF" size={50} />
          <Text style={Styles.message}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
  return {Texto, Visible, Component};
};
export default useBusyIndicator;
