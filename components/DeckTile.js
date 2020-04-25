import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { light_primary_color } from '../utils/colors';
import commonStyles from '../utils/commonStyles';

const DeckTile = ({ title, numCards }) => {
  return (
    <View style={styles.item}>
      <Text style={commonStyles.titleText}>
        {title}
      </Text>
      <Text style={commonStyles.subtitleText}>
        {`Number of cards: ${numCards}`}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: light_primary_color,
    borderRadius: 5,
    padding: 16,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  },
});

export default DeckTile;