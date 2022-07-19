import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';
const CounterInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 85,
    height: 30,
    borderColor: colors.BTN_PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressable: {
    width: 30,
    height: 34,
    borderRadius: 6,
    alignItems: 'center',
  },
  pressableTitle: {
    color: colors.BTN_DARK_PRIMARY_COLOR,
    fontSize: 30,
    top: -5,
    position: 'absolute',
  },
  title: {
    fontSize: 14,
    color: colors.TXT_PRIMARY_COLOR,
  },
});

export default CounterInputStyles;
