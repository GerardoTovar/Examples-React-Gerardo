import React, {useState} from 'react';
import {Modal, ActivityIndicator, Text, View} from 'react-native';
import Styles from './Styles';

const useBusyIndicator = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('Loading');
  const BIText = string => setText(string);

  const BIVisible = boolean => setVisible(boolean);
  const BusyIndicator = () => {
    return (
      <Modal visible={visible} transparent={true}>
        <View style={Styles.container}>
          <View style={Styles.background}>
            <ActivityIndicator color="#33A8FF" size={50} />
            <Text style={Styles.message}>{text}</Text>
          </View>
        </View>
      </Modal>
    );
  };
  return {BIText, BIVisible, BusyIndicator};
};
export default useBusyIndicator;
