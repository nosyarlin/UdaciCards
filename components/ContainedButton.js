import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { accent_color, text_color } from '../utils/colors';

export default function ContainedButton ({ text, onPress, btnStyle={}, btnTextStyle={} }) {
  return (
    <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
      <Text style={[styles.btnText, btnTextStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    height: 36,
    backgroundColor: accent_color,
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    color: text_color,
    fontSize: 16,
    fontWeight: 'bold',
  }
});