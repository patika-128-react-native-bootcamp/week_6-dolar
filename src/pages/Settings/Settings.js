import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import FadingEdge from 'react-native-fading-edge';
import { useTranslation } from 'react-i18next';
import SwitchSelector from 'react-native-switch-selector';
import style from './SettingStyle'
import Header from '../../components/Header';

const options = [
  { label: 'Turkish', value: 'tr' },
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'Italian', value: 'it' },
];

const Settings = () => {
  const { i18n } = useTranslation();

  return (
    <View style={style.container}>
      <Header />
      <Text style={style.text}>Language Settings </Text>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={lang => {
          i18n.changeLanguage(lang);
        }}
      />
      <ImageBackground style={style.background} source={require('../../assets/heros.png')} resizeMode='contain' /> 
    </View>

  );
};
export default Settings;

