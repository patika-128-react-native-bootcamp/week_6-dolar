import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        height: Dimensions.get('window').height / 3,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        alignSelf: 'flex-end',
        flex: 1,
        flexDirection: "column-reverse",
    }
}
);