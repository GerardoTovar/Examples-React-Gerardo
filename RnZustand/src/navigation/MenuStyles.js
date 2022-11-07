import {StyleSheet} from 'react-native';

const MenuStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F0F0',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#4C5BF7',
    marginBottom: 10,
    paddingTop: 25,
    height: 150,
    bottom: 5,
  },
  columna: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 15,
    bottom: 15,
  },
  otheroptions: {
    borderTopColor: '#B4B4AC',
    borderTopWidth: 1,
    borderBottomColor: '#B4B4AC',
    borderBottomWidth: 1,
    padding: 10,
  },
  division: {
    fontSize: 15,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#B4B4AC',
  },
});

export default MenuStyles;
