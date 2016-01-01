'use strict';

var React = require('react-native');
var {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image
} = React;

var routes = require('../routes');

var Button = require('./Button');
var GameCompare = require('./GameCompare');

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginTop: 62,
    marginBottom: 44
  },


  badge: {

  },
  image: {
    height: 250,
    resizeMode: Image.resizeMode.cover
  },
  info: {
    padding: 14
  },
  title: {
    fontSize: 28,
    fontWeight: '100'
  }
});

class GameDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var game = this.props.game;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.badge}>
          <Image style={styles.image} source={{uri: game.images[0].url}} />
          <View style={styles.info}>
            <Text style={styles.title}>{game.name}</Text>
            <Text>Rating: TBD</Text>
          </View>
          <Button text="Get the deal" onPress={this.onGetDeal.bind(this)} />
          <GameCompare navigator={this.props.navigator} game={game} />
        </View>
      </ScrollView>
    )
  }

  onGetDeal() {
    var route = routes.details.deal;
    route.url = `https://store.playstation.com/#!/en-us/games/adventures-of-pip/cid=${this.props.game.id}`;
    this.props.navigator.push(route);
  }
}

module.exports = GameDetails;
