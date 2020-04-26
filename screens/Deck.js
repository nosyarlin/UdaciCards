import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native';
import commonStyles from '../utils/commonStyles';
import ContainedButton from '../components/ContainedButton';
import TextButton from '../components/TextButton';

function mapStateToProps(decks) {
  return {
    decks
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
    console.log('delete');
  }

  render() {
    const { decks, navigation, route } = this.props;
    const { deckId } = route.params;
    const numCards = decks[deckId].questions.length;
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
