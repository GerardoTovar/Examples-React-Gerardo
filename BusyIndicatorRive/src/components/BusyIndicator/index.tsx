import React, {useRef, useState} from 'react';
import {Modal, Text, View} from 'react-native';
import Styles from './Styles';
import Rive, {RiveRef} from 'rive-react-native';

const useBusyIndicator = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const riveRef = useRef<RiveRef>(null);

  const BIcheck = () => riveRef.current?.fireState('State Machine 1', 'Check');
  const BIerror = () => riveRef.current?.fireState('State Machine 1', 'Error');
  const BIreset = () => riveRef.current?.fireState('State Machine 1', 'Reset');
  const BItexto = (string: string) => setText(string);
  const BIvisible = (boolean: boolean) => setVisible(boolean);

  const BusyIndicator = (
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
  return {BItexto, BIvisible, BIcheck, BIerror, BIreset, BusyIndicator};
};
export default useBusyIndicator;
