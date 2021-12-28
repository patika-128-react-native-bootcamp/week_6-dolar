import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {View, Text} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { ThemeContext } from '../../context/ThemeContext/ThemeProvider';




const options = [
  {label: 'English', value: 'en'},
  {label: 'İtalian', value: 'it'},
  {label: 'French', value: 'fr'},
  {label: 'Turkish', value: 'tr'},
];
const Theme = [
  {label: 'Default Mode', value: 'Default'},
  {label: 'Light Mode', value: 'Light'},
  {label: 'Dark Mode', value: 'Dark'},
];
const Settings = () => {
  const {t, i18n} = useTranslation();

  const {dispatch} = useContext(ThemeContext)

  const changeTheme = (theme) => {
    dispatch({
      type: "CHANGE_THEME",
      payload: theme
    })
  }

  return (
    <View>
      <Text>Language Settings </Text>
      <SwitchSelector
        options={options}
        initial={0}
        onPress={lang => {
          i18n.changeLanguage(lang)
        } }
      />
       <Text> Theme Settings </Text>
      <SwitchSelector
        options={Theme}
        initial={0}
        onPress={() => changeTheme(value)}
      />
    </View>
  );
};
export default Settings;
