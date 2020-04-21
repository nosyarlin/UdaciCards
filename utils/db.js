import { AsyncStorage } from 'react-native';

const DECK_STORAGE_KEY = 'UdaciCards:deck';
const ID_LENGTH = 18;

function _generateKey(title) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < ID_LENGTH; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return title.concat(result);
}

export function getDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse);
}

export function getDeck(key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(JSON.parse)
    .then((results) => results[key]);
}

export function saveDeckTitle(title) {
  key = _generateKey(title);
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({
      [key]: {
        title,
        key,
        questions: [],
      },
    })
  );
}

export function addCardToDeck(key, question, answer) {
  return getDecks()
    .then((results) => {
      decks = {
        ...results,
        [key]: {
          ...results[key],
          questions: results[key].questions.concat([{
            question,
            answer,
          }])
        }
      }
      AsyncStorage.setItem(
        DECK_STORAGE_KEY,
        JSON.stringify(decks)
      );
    });
}