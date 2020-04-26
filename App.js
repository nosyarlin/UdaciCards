import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import reducer from './reducers';
import Constants from 'expo-constants';
import { light_primary_color } from './utils/colors';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';

function UdaciStatusBar() {
  return (
    <View 
      style={styles.statusBar}>
      <StatusBar 
        translucent
        backgroundColor={{light_primary_color}}
        barStyle='dark-content'
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <UdaciStatusBar/>
          <Navigation/>
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    backgroundColor: light_primary_color,
    height: Constants.statusBarHeight
  }
});
