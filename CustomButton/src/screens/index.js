import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../components/atoms/Form/CustomButton';
import colors from '../constants/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomButton text={'text with an icon to the left'} iconName="pencil" />
      <CustomButton text={'disabled button'} iconName="plus" disabled />
      <CustomButton
        onPress={() => {}}
        text={'text with an icon in PNG format'}
        iconName="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png"
      />
      <CustomButton
        style={styles.CustomStyleBtn}
        styleText={styles.CustomStyleTxt}
        onPress={() => {}}
        text={'custom styles'}
        iconName="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png"
      />
      <CustomButton onPress={() => {}} text={'text only'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    backgroundColor: '#33A8FF',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 40,
  },
  CustomStyleBtn: {
    backgroundColor: colors.BTN_LIGHT_PRIMARY_COLOR,
    width: 300,
    borderRadius: 20,
  },
  CustomStyleTxt: {
    color: colors.BTN_TXT_LIGHT_PRIMARY_COLOR,
    fontWeight: '900',
    fontSize: 20,
  },
});

export default Home;
