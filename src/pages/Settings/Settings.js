import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';

const options = [
  { label: 'English', value: 'en' },
  { label: 'İtalian', value: 'it' },
  { label: 'French', value: 'fr' },
  { label: 'Turkish', value: 'tr' },
];

const Settings = () => {
  const { i18n } = useTranslation();

  return (
    <View>
      <Text>Language Settings </Text>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={lang => {
          i18n.changeLanguage(lang);
        }}
      />
    </View>
  );
};
export default Settings;

