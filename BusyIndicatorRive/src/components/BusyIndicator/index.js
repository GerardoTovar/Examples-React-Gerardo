import React, {useRef, useState} from 'react';
import {Modal, Text, View} from 'react-native';
import Styles from './Styles';
import Rive from 'rive-react-native';
const useBusyIndicator = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const riveRef = useRef(null);

  const check = () => {
    riveRef.current?.fireState('State Machine 1', 'Check');
  };
  const error = () => {
    riveRef.current?.fireState('State Machine 1', 'Error');
  };
  const reset = () => {
    riveRef.current?.fireState('State Machine 1', 'Reset');
  };
  const Texto = string => setText(string);
  const Visible = boolean => setVisible(boolean);

  const Component = (
    <Modal visible={visible} transparent={true}>
      <View style={Styles.container}>
        <View style={Styles.background}>
          <Rive
            ref={riveRef}
            resourceName="checkerror"
            style={{width: 100, height: 100}}
            autoplay={true}
            stateMachineName="State Machine 1"
          />
          <Text style={Styles.message}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
  return {Texto, Visible, check, error, reset, Component};
};
export default useBusyIndicator;
