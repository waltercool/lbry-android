import { StyleSheet } from 'react-native';

const settingsStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16
  },
  scrollContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16
  },
  row: {
    marginBottom: 12,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  switchText: {
    width: '70%'
  },
  switchContainer: {
    width: '25%'
  },
  label: {
    fontSize: 14,
    fontFamily: 'Metropolis-Regular'
  },
  description: {
    fontSize: 12,
    fontFamily: 'Metropolis-Regular',
    color: '#aaaaaa'
  }
});

export default settingsStyle;