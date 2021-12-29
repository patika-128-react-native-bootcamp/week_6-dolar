import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 5,
  },
  text: {
    marginBottom: 15,
    fontSize: 22,
    color: '#D65F5f',
    fontWeight: 'bold',
  },
  background: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});
