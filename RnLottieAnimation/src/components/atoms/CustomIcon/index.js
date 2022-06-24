import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CustomIcon = props => {
  const {name, size, color, text, styleText} = props;

  const renderText = () => {
    if (text) {
      return <Text style={styleText}>{text}</Text>;
    }

    return null;
  };

  return (
    <View style={styles.container}>
      <Icon name={name} size={size} color={color} />
      {renderText()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default CustomIcon;
