import React from 'react';
import { Platform } from 'react-native';
import 'react-native-gesture-handler';
import {
  text_color,
  primary_color,
  light_primary_color
} from '../utils/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AddDeck from '../screens/AddDeck';
import Decks from '../screens/Decks';

const Tabs = Platform.os === 'ios'
  ? createBottomTabNavigator()
  : createMaterialTopTabNavigator();

function NavigationTabs() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: text_color,
        style: {
          height: 56,
          backgroundColor: primary_color,
          shadowColor: 'rgba(0, 0, 0, 0.24)',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 6,
          shadowOpacity: 1,
        },
        inactiveTintColor: light_primary_color,
      }}
      navigationOptions={{
        header: null,
      }}
    >
      <Tabs.Screen
        name="Decks"
        component={Decks}
      />
      <Tabs.Screen
        name="Add Deck"
        component={AddDeck}
      />
    </Tabs.Navigator>
  );
}

export default NavigationTabs;