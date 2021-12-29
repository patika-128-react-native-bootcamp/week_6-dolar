import React from 'react'
import { View, Image } from 'react-native'

import style from './HeaderStyle';

const Header = () => {
    return (
        <View>
            <Image style={style.header_logo} source={require('../../assets/marvel_logo.png')} />
        </View>
    )
}

export default Header;
