import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions';

export default function decks(state={}, action) {
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        [action.deck.key]: action.deck,
      }
    case ADD_CARD:
      const { key, question, answer } = action;
      deck = {
        ...state[key],
        questions: deck.questions.concat([{
          question,
          answer,
        }])
      }
      return {
        ...state,
        [key]: deck,
      }
    default:
      return state;
  }
}