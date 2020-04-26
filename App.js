import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';
import reducer from './reducers';
import { light_primary_color } from './utils/colors';
import { setLocalNotification} from './utils/notifications';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification());
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={createStore(reducer)}>
          <View style={styles.container}>
            <StatusBar
              backgroundColor={light_primary_color}
              barStyle="dark-content"
            />
            <Navigation/>
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
