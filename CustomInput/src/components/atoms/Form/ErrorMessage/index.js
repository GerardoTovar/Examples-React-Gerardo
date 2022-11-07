import React from 'react';
import {Text, View} from 'react-native';
import Style from './Style.js';
import Icon from '../../Icon';
const ErrorMessage = ({
  errorMsg,
  styleMsg,
  iconName,
  styleIcon,
  iconDirectory,
  iconSize,
}) => {
  return (
    <View style={Style.Container}>
      <Icon
        style={[Style.IconError, styleIcon]}
        directory={iconDirectory}
        name={iconName}
        size={iconSize}
      />
      <Text style={[Style.Error, styleMsg]}>{errorMsg}</Text>
    </View>
  );
};

export default ErrorMessage;
