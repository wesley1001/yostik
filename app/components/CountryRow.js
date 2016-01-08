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

var globals = require('../globals');

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  image: {
    width: 60,
    height: 50,
    resizeMode: Image.resizeMode.cover,
    marginRight: 10,
    borderRadius: 8
  },
  infoLeft: {
    flex: 2
  },
  infoRight: {
    flex: 1
  },
  name: {
    color: '#000',
    fontSize: 18,
    fontWeight: '500'
  },
  platform: {
    color: '#AAA',
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
  },
  separator: {
    height: 1,
    backgroundColor: '#DDD',
  }
});

class CountryRow extends React.Component {
  render() {
    var game = this.props.game;
    var displayPrice;
    var oldPriceText;
    var image;

    switch(game.country) {
      case 'AR':
        image = require('../../img/countries/AR.png');
      break;
      case 'AU':
        image = require('../../img/countries/AU.png');
      break;
      case 'BR':
        image = require('../../img/countries/BR.png');
      break;
      case 'ES':
        image = require('../../img/countries/ES.png');
      break;
      case 'GB':
        image = require('../../img/countries/GB.png');
      break;
      default:
        image = require('../../img/countries/US.png');
      break;
    }

    if(game.discounts.length === 0) {
      displayPrice = game.displayPrice;
    } else {
      displayPrice = game.discounts[0].display_price;
      oldPriceText = <Text style={[styles.platform, styles.alignRight, styles.oldPrice]}>{game.displayPrice}</Text>;
    }

    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View>
          <View style={styles.row}>
            <Image style={styles.image} source={image} />
            <View style={styles.infoLeft}>
              <Text style={styles.name}>{game.name}</Text>
              <Text style={styles.platform}>{game.platforms[0]}</Text>
            </View>
            <View style={styles.infoRight}>
              <Text style={[styles.name, styles.alignRight]}>{displayPrice}</Text>
              {oldPriceText}
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  }
};

module.exports = CountryRow;
