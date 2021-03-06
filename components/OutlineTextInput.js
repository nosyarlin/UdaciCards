import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { accent_color } from '../utils/colors';

const OutlineTextInput = ({ inputStyle={}, onChange, ...rest }) => {
  return (
    <TextInput
      style={[styles.textInput, inputStyle]}
      onChangeText={onChange}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'stretch',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 16,
    height: 36,
    borderRadius: 5,
    borderColor: accent_color,
    borderWidth: 1, 
  },
});


export default OutlineTextInput;