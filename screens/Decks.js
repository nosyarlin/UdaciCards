import { AppLoading } from 'expo';
import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/db';
import { receiveDecks } from '../actions';
import TextButton from '../components/TextButton';
import ContainedButton from '../components/ContainedButton';

function mapStateToProps({ decks }) {
  return {
    decks
  };
}

export class Decks extends React.Component {
  state = {
    ready: false,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({
        ready: true,
      })));;
  }

  addDeck = () => {

  }

  render() {
    const { ready } = this.state;
    const { decks } = this.props;
    if (!ready) {
      return <AppLoading/>
    }
    console.log(decks);

    return (
      <View style={{flex: 1}}>
        <Text>
          {JSON.stringify(decks)}
        </Text>
        <ContainedButton
          text='QUIZ'
          onPress={this.addDeck}
        />
        <TextButton
          text='ADD CARD'
          onPress={this.addDeck}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
// Implement map dispatch to props
)(Decks)
