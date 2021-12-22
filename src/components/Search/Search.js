import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import styles from './SearchStyle';

const Search = ({placeholder, onSearch}) => {
  const [text, setText] = useState();

  const handleText = e => {
    setText(e);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={e => handleText(e)}
      />
    </View>
  );
};
export default Search;
