import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    header_logo: {
        height: Dimensions.get('window').height / 10,
        width: Dimensions.get('window').width,
        backgroundColor: '#F0131E',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
});
