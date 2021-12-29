import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TextInput, View} from 'react-native';

import styles from './SearchStyle';

const Search = ({placeholder, onSearch}) => {
  const {t} = useTranslation();
  const [text, setText] = useState();

  const handleText = e => {
    setText(e);
    onSearch(text);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{t('WelcomeText')}</Text>
      </View>
      <View style={styles.inner_container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#000"
          onChangeText={e => handleText(e)}
        />
      </View>
    </View>
  );
};
export default Search;
