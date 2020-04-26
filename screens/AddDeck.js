import React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Alert, Keyboard } from 'react-native';
import commonStyles from '../utils/commonStyles';
import { generateKey, saveDeckTitle } from '../utils/db';
import { addDeck } from '../actions';
import ContainedButton from '../components/ContainedButton';
import OutlineTextInput from '../components/OutlineTextInput';

export class AddDeck extends React.Component {
  state = {
    title: '',
  }

  onSubmit = () => {
    const { title } = this.state;
    const { dispatch } = this.props;
    const key = generateKey(title);

    // Clear state
    this.setState({ title: '' });
    // Update front end store
    dispatch(addDeck(key, title));
    // Update DB
    saveDeckTitle(key, title)
      .then(() => {
        Keyboard.dismiss();
        Alert.alert(
          'Success',
          'Deck successfully created',
        );
      });
  }

  onChange = (title) => {
    this.setState({ title });
  }

  render() {
    return (
      <View style={commonStyles.center}>
        <Text style={commonStyles.header}>
          What is the title of your new deck?
        </Text>
        <OutlineTextInput
          onChange={this.onChange}
          value={this.state.title}
          placeholder="Enter title for your new deck"
        />
        <ContainedButton
          text="ADD"
          onPress={this.onSubmit}
          btnStyle={{ alignSelf: 'stretch' }}
        />
      </View>
    );
  }
}

export default connect()(AddDeck)
