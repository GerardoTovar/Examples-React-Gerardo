import React from 'react';
import {TouchableOpacity} from 'react-native';
import CustomIcon from '../CustomIcon';

const CustomButtom = ({name, size, color, onPress, text, styleText}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <CustomIcon
        name={name}
        size={size}
        color={color}
        text={text}
        styleText={styleText}
      />
    </TouchableOpacity>
  );
};

export default CustomButtom;
