import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Text, TextInput, View} from 'react-native';

import styles from './SearchStyle';

const Search = ({placeholder, onSearch}) => {
  const {t, i18n} = useTranslation();
  const [text, setText] = useState();

  const handleText = e => {
    setText(e);
    onSearch(text);
  };

  return (
    <View style={{margin: 10}}>
      <Text>{t('WelcomeText')}</Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={e => handleText(e)}
        />
      </View>
    </View>
  );
};
export default Search;
