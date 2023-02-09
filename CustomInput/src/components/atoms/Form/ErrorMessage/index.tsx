import React from 'react';
import {StyleProp, Text, TextStyle, View} from 'react-native';
import Style from './Style';
import Icon from '../../Icon';

interface IErrorMessage {
  errorMsg: string;
  iconName: string;
  styleMsg?: StyleProp<TextStyle>;
  styleText?: StyleProp<TextStyle>;
  styleIcon?: TextStyle;
  iconDirectory?:
    | 'Ionicons'
    | 'EvilIcons'
    | 'FontAwesome5'
    | 'MaterialCommunityIcons'
    | 'Feather'
    | 'MaterialIcons'
    | 'FontAwesome';
  iconSize?: number;
}

const ErrorMessage = ({
  errorMsg,
  styleMsg,
  iconName,
  styleIcon,
  iconDirectory,
  iconSize = 12,
}: IErrorMessage) => {
  return (
    <View style={Style.Container}>
      <Icon
        style={{...Style.IconError, ...styleIcon}}
        directory={iconDirectory}
        name={iconName}
        size={iconSize}
      />
      <Text style={[Style.Error, styleMsg]}>{errorMsg}</Text>
    </View>
  );
};

export default ErrorMessage;
