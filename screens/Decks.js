import { AppLoading } from 'expo';
import React from 'react';
import { 
  Text, TouchableOpacity,
  FlatList, SafeAreaView
} from 'react-native';
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

  renderItem = (key, title, questions) => {
    return (
      <TouchableOpacity
        key={key}
        onPress={() => this.onPress(key)}
      >
        <DeckTile
          title={title}
          numCards={questions.length}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const { ready } = this.state;
    const { decks } = this.props;
    if (!ready) {
      return <AppLoading/>
    }

    return (
      <SafeAreaView style={{flex: 1, marginBottom: 10}}>
        <FlatList
          data={Object.keys(decks)}
          renderItem={({ item }) => {
            const key = item;
            return this.renderItem(
              key,
              decks[key].title,
              decks[key].questions,
            );
          }}
          keyExtractor={item => item}
        />
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
)(Decks)
