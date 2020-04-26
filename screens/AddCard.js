import React from 'react';
import { connect } from 'react-redux';
import { View, Text, Alert, Keyboard } from 'react-native';
import { addCard } from '../actions';
import { addCardToDeck } from '../utils/db';
import commonStyles from '../utils/commonStyles';
import OutlineTextInput from '../components/OutlineTextInput';
import ContainedButton from '../components/ContainedButton';

export class AddCard extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  handleAddCard = () => {
    const { question, answer } = this.state;
    const { dispatch, route, navigation } = this.props;

    // Clear state
    this.setState({ question: '', answer: '' });
    // Update front end store
    const { deckId } = route.params;
    dispatch(addCard(deckId, question, answer));
    // Update DB
    addCardToDeck(deckId, question, answer)
      .then(() => {
        Keyboard.dismiss();
        Alert.alert(
          'Success',
          'Card successfully added',
        );
        navigation.goBack();
      });
  }

  render() {
    return (
      <View
        style={commonStyles.center}
      >
        <Text
          style={commonStyles.header}
        >
          Create a new question
        </Text>
        <OutlineTextInput
          onChange={(question) => this.setState({ question })}
          value={this.state.question}
          placeholder="Enter question"
        />
        <OutlineTextInput
          onChange={(answer) => this.setState({ answer })}
          value={this.state.answer}
          placeholder="Enter answer"
        />
        <ContainedButton
          text="ADD"
          onPress={this.handleAddCard}
          btnStyle={{ alignSelf: 'stretch' }}
        />
      </View>
    );
  }
}

export default connect()(AddCard)
