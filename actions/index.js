export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_DECK = 'DELETE_DECK';

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function addDeck(key, title) {
  return {
    type: ADD_DECK,
    key,
    title,
  }
}

export function addCard(key, question, answer) {
  return {
    type: ADD_CARD,
    key,
    question,
    answer,
  }
}

export function deleteDeck(key) {
  return {
    type: DELETE_DECK,
    key,
  }
}