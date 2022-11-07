import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Icon = ({directory, name, size, color, style}) => {
  const props = {name, size, color, style};
  switch (directory) {
    case 'Ionicons':
      return <IconIon {...props} />;
    case 'EvilIcons':
      return <IconEvilIcons {...props} />;
    case 'FontAwesome5':
      return <IconFontAwesome5 {...props} />;
    case 'MaterialCommunityIcons':
      return <MaterialCommunityIcons {...props} />;
    case 'Feather':
      return <Feather {...props} />;
    case 'MaterialIcons':
      return <MaterialIcons {...props} />;
    default:
      return <IconFontAwesome {...props} />;
  }
};

export default Icon;
