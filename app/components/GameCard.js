'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ListView
} = React;

var LinearGradient = require('react-native-linear-gradient');

var globals = require('../globals');

let ROW_HEIGHT = 210;

var styles = StyleSheet.create({
  row: {
    marginBottom: 2,
    height: ROW_HEIGHT
  },
  image: {
    height: ROW_HEIGHT,
    resizeMode: Image.resizeMode.cover
  },
  info: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    height: 64,
    flex: 1,
    flexDirection: 'row'
  },
  infoLeft: {
    flex: 3
  },
  infoRight: {
    flex: 1
  },
  name: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
    shadowColor: 'black',
		shadowOffset: {height: 1, width: 1},
		shadowOpacity: .7,
		shadowRadius: 1,
  },
  platform: {
    color: '#B6B6B6',
    fontSize: 15
  },
  oldPrice: {
    textDecorationLine: 'line-through'
  },
  alignRight: {
    textAlign: 'right'
  },
  discountContainer: {
    borderRadius: 4,
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: globals.colors.secondary,
    padding: 10,
    shadowOffset: {height: 0, width: 0},
		shadowOpacity: .4,
		shadowRadius: 2,
  },
  discountText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500'
  }
});

class GameCard extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={styles.row}>
          <Image style={styles.image} source={{uri: this.props.game.imageUrl}}>
            <View style={styles.discountContainer}>
              <Text style={styles.discountText}>- {this.props.game.discountPercent}%</Text>
            </View>
            <LinearGradient colors={['transparent', '#000']} style={styles.info}>
              <View style={styles.infoLeft}>
                <Text style={styles.name}>{this.props.game.name}</Text>
                <Text style={styles.platform}>{this.props.game.platform}</Text>
              </View>
              <View style={styles.infoRight}>
                <Text style={[styles.name, styles.alignRight]}>${this.props.game.newPrice}</Text>
                <Text style={[styles.platform, styles.alignRight, styles.oldPrice]}>${this.props.game.oldPrice}</Text>
              </View>
            </LinearGradient>
          </Image>
        </View>
      </TouchableHighlight>
    );
  }
};

module.exports = GameCard;
