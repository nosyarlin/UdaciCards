import { RECEIVE_DECKS, ADD_DECK, ADD_CARD, DELETE_DECK } from '../actions';

export default function decks(state={}, action) {
  const { key, title, question, answer } = action;
  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        [key]: {
          title,
          key,
          questions: [],
        },
      }
    case ADD_CARD:
      deck = {
        ...state[key],
        questions: state[key].questions.concat([{
          question,
          answer,
        }])
      }
      return {
        ...state,
        [key]: deck,
      }
    case DELETE_DECK:
      const newState = {
        ...state,
      };
      delete newState[key]
      return newState;
    default:
      return state;
  }
}