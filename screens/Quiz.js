import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import commonStyles from '../utils/commonStyles';
import TextButton from '../components/TextButton';
import ContainedButton from '../components/ContainedButton';

function mapStateToProps(decks, { route }) {
  const { deckId } = route.params;
  return {
    deck: decks[deckId],
  };
}

export class Quiz extends React.Component {
  state = {
    showAnswer: false,
    score: 0,
    index: 0,
  }

  toggleAnswer = () => {
    this.setState((state) => ({
      showAnswer: !state.showAnswer,
    }));
  }

  handleCorrect = () => {
    this.setState((state) => ({
      showAnswer: false,
      score: state.score + 1,
      index: state.index + 1,
    }))
  }

  handleIncorrect = () => {
    this.setState((state) => ({
      showAnswer: false,
      index: state.index + 1,
    }))
  }

  reset = () => {
    this.setState({
      showAnswer: false,
      score: 0,
      index: 0,
    });
  }

  render() {
    const { showAnswer, index, score } = this.state;
    const { deck, navigation } = this.props;
    const numCards = deck.questions.length;

    if (index < numCards) {
      // Show question
      return (
        <View style={commonStyles.center}>
          <Text style={styles.counter}>
            {`${index + 1}/${numCards}`}
          </Text>
          <Text style={commonStyles.header}>
            {showAnswer
              ? deck.questions[index].answer
              : deck.questions[index].question
            }
          </Text>
          <TextButton
            text={showAnswer ? "Show Question" : "Show Answer"}
            onPress={this.toggleAnswer}
          />
          <ContainedButton
            text="Correct"
            onPress={this.handleCorrect}
            btnStyle={{ alignSelf: 'stretch' }}
          />
          <ContainedButton
            text="Incorrect"
            onPress={this.handleIncorrect}
            btnStyle={{ alignSelf: 'stretch' }}
          />
        </View>
      );
    } else {
      // Show score
      const percentage_score = Math.round(score / numCards * 100);
      return (
        <View style={commonStyles.center}>
          <Text style={commonStyles.header}>
            {`You got ${percentage_score}%`}
          </Text>
          <ContainedButton
            text="Restart Quiz"
            onPress={this.reset}
            btnStyle={{ alignSelf: 'stretch' }}
          />
          <ContainedButton
            text="Back to Deck"
            onPress={() => navigation.goBack()}
            btnStyle={{ alignSelf: 'stretch' }}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  counter: {
    margin: 16,
    fontSize: 24,
  },
});

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Quiz)
