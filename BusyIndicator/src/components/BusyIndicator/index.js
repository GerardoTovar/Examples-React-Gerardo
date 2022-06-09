import React from 'react';
import {Modal, ActivityIndicator, Text, View} from 'react-native';
import Styles from './Styles';

const BusyIndicator = props => {
  const {visible, text} = props;
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
export default BusyIndicator;
