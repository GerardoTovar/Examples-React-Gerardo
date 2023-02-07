import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Styles from './Styles';
import Icon from '../../Icon';

interface ICustomButton {
  text: string;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress?: () => void;
  iconName?: string;
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

const CustomButton = ({
  text,
  style,
  styleText,
  disabled = false,
  onPress,
  iconName,
  styleIcon,
  iconDirectory,
  iconSize = 25,
}: ICustomButton) => {
  let TOUCHABLE_STYLES = Styles.TouchableOpacity;
  let ICON_STYLES = {};
  let IS_ICON;
  if (disabled) {
    TOUCHABLE_STYLES = {...TOUCHABLE_STYLES, ...Styles.Disabled};
    onPress = () => {};
  }
  if (iconName) {
    IS_ICON = isIcon(iconName);
    IS_ICON ? (ICON_STYLES = Styles.Icon) : (ICON_STYLES = Styles.Image);
  }

  return (
    <TouchableOpacity
      style={[TOUCHABLE_STYLES, style]}
      onPress={onPress}
      disabled={disabled}>
      {iconName && IS_ICON ? (
        <Icon
          style={{...ICON_STYLES, ...styleIcon}}
          directory={iconDirectory}
          name={iconName}
          size={iconSize}
        />
      ) : (
        <ImageView style={[ICON_STYLES, styleIcon]} uri={iconName} />
      )}
      <Text style={[Styles.Text, styleText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const ImageView = ({style, uri}: any): JSX.Element | null => {
  // Si no se envia un uri se devulve un null
  return uri ? <Image style={style} source={{uri}} /> : null;
};

const isIcon = (IconName: string) => {
  const ArrayIco = IconName.split('.');
  return ArrayIco[ArrayIco.length - 1] === 'png' ? false : true;
};

export default CustomButton;
