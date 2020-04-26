const NOTIFICATION_KEY = 'UdaciCards:notifications';
import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

function _createNotification() {
  return {
    title: 'Study your decks!',
    body: "👋 don't forget to revise your decks for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();
              let tomorrow = new Date();
              // tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(17);
              tomorrow.setMinutes(0);

              Notifications.scheduleLocalNotificationAsync(
                _createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );
              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
          })
      }
    })
}