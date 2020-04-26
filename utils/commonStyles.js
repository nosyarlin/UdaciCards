import { StyleSheet } from 'react-native';
import { primary_text_color, secondary_text_color } from '../utils/colors';

export default commonStyles = StyleSheet.create({
  header: {
    fontSize: 36,
    color: primary_text_color,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  titleText: {
    fontSize: 24,
    color: primary_text_color,
  },
  subtitleText: {
    fontSize: 16,
    color: secondary_text_color,
  }
});