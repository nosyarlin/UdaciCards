import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../utils/commonStyles';
import { deleteDeck } from '../actions';
import { deleteDeckFromDB } from '../utils/db';
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
    console.log("add card");
  }

  navigateToQuiz = () => {
    console.log("quiz");
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
          text="ADD CARD"
          onPress={this.navigateToAddCard}
          btnStyle={{ alignSelf: 'stretch' }}
        />
        <ContainedButton
          text="QUIZ"
          onPress={this.navigateToQuiz}
          btnStyle={{ alignSelf: 'stretch' }}
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
