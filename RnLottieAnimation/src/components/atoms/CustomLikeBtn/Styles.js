import {StyleSheet} from 'react-native';
const height = 80;
const heartLottieStyle = StyleSheet.create({
  heartLottie: {
    height: height,
    position: 'absolute',
    top: -10,
    left: -8.5,
  },
  actions: {
    height: height / 2,
    width: height / 2 + 5,
    overflow: 'hidden',
  },
});

export default heartLottieStyle;
