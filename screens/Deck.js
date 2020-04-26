import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import commonStyles from '../utils/commonStyles';
import { deleteDeck } from '../actions';
import { deleteDeckFromDB } from '../utils/db';
import { accent_color } from '../utils/colors';
import { clearLocalNotification, setLocalNotification} from '../utils/notifications';
import ContainedButton from '../components/ContainedButton';
import TextButton from '../components/TextButton';

function mapStateToProps(decks, { route }) {
  const { deckId } = route.params;
  return {
    decks,
    deckId,
  };
}

export class Deck extends React.Component {

  navigateToAddCard = () => {
    const { navigation, deckId } = this.props;
    navigation.navigate(
      'AddCard',
      { deckId }
    )
  }

  startQuiz = () => {
    const { navigation, deckId } = this.props;
    // Clear notifications for today
    clearLocalNotification()
      .then(setLocalNotification);

    // Navigate to quiz
    navigation.navigate(
      'Quiz',
      { deckId }
    )
  }

  handleDeleteDeck = () => {
    const { deckId, dispatch, navigation } = this.props;
    // Delete from db
    deleteDeckFromDB(deckId)
      .then(() => {
        // Delete from redux store
        dispatch(deleteDeck(deckId));
        // Navigate to decks
        navigation.goBack(); 
      });
  }

  render() {
    const { decks, deckId } = this.props;
    let numCards = 0;
    if (deckId in decks) {
      numCards = decks[deckId].questions.length;
    }

    return (
      <View
        style={commonStyles.center}
      >
        <Text
          style={commonStyles.header}
        >
          {`${numCards} cards`}
        </Text>
        <ContainedButton
          text="Add Card"
          onPress={this.navigateToAddCard}
          btnStyle={{ alignSelf: 'stretch' }}
        />
        <ContainedButton
          text="Quiz"
          onPress={this.startQuiz}
          btnStyle={{
            alignSelf: 'stretch',
            backgroundColor: numCards === 0
              ? 'gray'
              : accent_color
          }}
          disabled={numCards === 0}
        />
        <TextButton
          text="Delete Deck"
          onPress={this.handleDeleteDeck}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
)(Deck)
