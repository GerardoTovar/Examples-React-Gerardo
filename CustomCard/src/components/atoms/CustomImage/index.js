import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import CustomIcon from '../CustomIcon';

const textBold = {
  fontSize: 14,
  fontWeight: 'bold',
  color: 'black',
  marginLeft: 5,
};

const CustomImage = props => {
  const {name, size, color, text, uri} = props;
  return (
    <View style={img.Cotainer}>
      <Image style={img.image} source={{uri: uri}} />
      <View style={img.Card}>
        <CustomIcon
          name={name}
          size={size}
          color={color}
          text={text}
          styleText={textBold}
        />
      </View>
    </View>
  );
};

const img = StyleSheet.create({
  image: {
    width: 115,
    height: 120,
    borderRadius: 10,
  },
  Cotainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  Card: {
    backgroundColor: '#fbedb7',
    borderRadius: 12,
    height: 30,
    position: 'absolute',
    minWidth: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingTop: 4.5,
    top: 85,
  },
});
export default CustomImage;
