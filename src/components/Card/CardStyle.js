import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    borderRadius: 5,
    padding: 3,
    flexDirection: 'row',
  },
  inner_container: {
    justifyContent: 'space-around',
  },
  image: {
    width: 90,
    height: 130,
  },
  name: {
    color: '#0288d1',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
  },
  button_view: {
    marginLeft: 10,
  },
});
