import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import Styles from './Styles';

const RnBtn = props => {
  let {title, style, styleText, disabel = false, onPress, google} = props;
  const TOUCHABLE_STYLES = [Styles.TouchableOpacity];
  const TEXT_STYLES = [Styles.text];
  if (disabel) {
    TOUCHABLE_STYLES.push(Styles.Disabel);
    onPress = () => {};
  }
  if (style) {
    TOUCHABLE_STYLES.push(style);
  }
  if (styleText) {
    TEXT_STYLES.push(styleText);
  }
  return (
    <TouchableOpacity style={TOUCHABLE_STYLES} onPress={onPress}>
      {google ? (
        <Image
          style={Styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png',
          }}
        />
      ) : null}
      <Text style={TEXT_STYLES}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RnBtn;
