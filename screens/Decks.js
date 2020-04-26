import { AppLoading } from 'expo';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/db';
import { receiveDecks } from '../actions';
import DeckTile from '../components/DeckTile';

function mapStateToProps(decks) {
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

  onPress = (key) => {
    const { decks, navigation } = this.props;
    navigation.navigate(
      'Deck',
      { 
        deckId: key,
        title: decks[key].title,
      }
    )
  }

  render() {
    const { ready } = this.state;
    const { decks } = this.props;
    if (!ready) {
      return <AppLoading/>
    }

    return (
      <View style={{flex: 1}}>
        {Object.keys(decks).map((key) => {
          return (
            <TouchableOpacity
              onPress={() => this.onPress(key)}
            >
              <DeckTile
                title={decks[key].title}
                numCards={decks[key].questions.length}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
)(Decks)
