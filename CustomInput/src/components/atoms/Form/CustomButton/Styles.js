import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
import sizes from '../../../../constants/sizes';

const Styles = StyleSheet.create({
  TouchableOpacity: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.BTN_PRIMARY_COLOR,
    marginTop: 0,
    width: sizes.ScreenWidth - 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  Disabled: {
    backgroundColor: 'grey',
  },
  Text: {
    fontSize: 15,
    textAlign: 'center',
    color: colors.BTN_TXT_PRIMARY_COLOR,
    letterSpacing: 1,
    fontWeight: '600',
  },
  Image: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  Icon: {
    marginRight: 15,
    color: 'white',
  },
});

export default Styles;
