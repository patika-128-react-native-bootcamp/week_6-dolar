import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 2,
    borderColor: '#bdbdbd',
    backgroundColor: '#ffc400',
    borderRadius: 5,
    padding: 3,
    flexDirection: 'row',
  },
  inner_container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  image: {
    width: 90,
    height: 130,
  },
  name: {
    color: '#616161',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    marginLeft: 15,
  },
  button_view: {
    marginLeft: 10,
  },
});
