import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 2,
    borderColor: '#bdbdbd',
    backgroundColor: '#bdbdbd',
    opacity: 0.9,
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
    borderRadius: 5
  },
  name: {
    color: '#616161',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'Avenir-Medium',
    marginLeft: 15,
    marginRight: 15,
    padding: 5,
    paddingLeft: 10,
    borderRadius: 5
  },
  button_view: {
    marginLeft: 10,
  },
});
