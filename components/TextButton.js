import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { accent_color, text_color } from '../utils/colors';

export default function TextButton ({ text, onPress, style={} }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={[styles.btnText, style]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    height: 36,
  },
  btnText: {
    textAlign: 'center',
    color: accent_color,
    fontSize: 16,
    fontWeight: 'bold',
  }
});