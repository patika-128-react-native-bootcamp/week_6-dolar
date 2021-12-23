import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './ButtonStyle';

const Button = ({title, handlePress, isActive}) => {
  return (
    <TouchableOpacity style={styles.container}
     onPress={handlePress}
     disabled={isActive}
     >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
