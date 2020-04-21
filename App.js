import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import reducer from './reducers';
import Decks from './screens/Decks';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <Decks />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
