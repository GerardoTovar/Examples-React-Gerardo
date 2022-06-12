import {StyleSheet} from 'react-native';

const LoadingIndicatorStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: 120,
    height: 120,
    backgroundColor: '#20232A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  message: {
    bottom: 10,
    color: '#33A8FF',
  },
});

export default LoadingIndicatorStyles;
