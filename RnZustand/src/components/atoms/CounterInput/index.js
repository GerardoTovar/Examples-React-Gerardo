import React from 'react';
import {View, Text} from 'react-native';
import CounterInputStyles from './CounterInputStyles';
import RNBounceable from '@freakycoder/react-native-bounceable';

const Pressable = props => {
  const {text, onPress} = props;
  return (
    <RNBounceable
      style={CounterInputStyles.pressable}
      onPress={onPress}
      bounceFriction={2}
      bounceEffect={1.2}>
      <Text style={CounterInputStyles.pressableTitle}>{text}</Text>
    </RNBounceable>
  );
};
const CounterInput = ({onDecrease, onIncrease, quantity}) => {
  return (
    <View style={CounterInputStyles.container}>
      <Pressable text="-" onPress={onDecrease} />
      <Text style={CounterInputStyles.title}>{quantity}</Text>
      <Pressable text="+" onPress={onIncrease} />
    </View>
  );
};

export default CounterInput;
