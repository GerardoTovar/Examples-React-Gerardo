import React, {useState} from 'react';
import {Modal, ActivityIndicator, Text, View} from 'react-native';
import Styles from './Styles';
import {IUseBusyIndicator} from './interfaces';
const useBusyIndicator = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('Loading');

  const BIText = (string: string) => setText(string);
  const BIVisible = (boolean: boolean) => setVisible(boolean);

  const BusyIndicator: JSX.Element = (
    <Modal visible={visible} transparent={true}>
      <View style={Styles.container}>
        <View style={Styles.background}>
          <ActivityIndicator color="#33A8FF" size={50} />
          <Text style={Styles.message}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
  return {BIText, BIVisible, BusyIndicator};
};
export default useBusyIndicator;
