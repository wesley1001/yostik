'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator
} = React;

var EventEmitter = require('EventEmitter');

var NavBar = require('./NavBar');
var GamesList = require('./GamesList');
var GameDetails = require('./GameDetails');
var WebView = require('./WebView');
var Search = require('./Search');

var routes = require('../routes');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

class DealsLayout extends React.Component {
  componentWillMount() {
      this.eventEmitter = new EventEmitter();
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={routes.deals.list}
        renderScene={this.renderScene.bind(this)}
        events={this.eventEmitter}
        navigationBar={NavBar} />
    );
  }

  renderScene(route, navigator) {
    if(route.name === 'list') {
      return <GamesList navigator={navigator} />
    } else if(route.name === 'details') {
      return <GameDetails navigator={navigator} game={route.gameInfo} />
    } else if(route.name === 'deal') {
      return <WebView navigator={navigator} url={route.url} />
    } else if(route.name === 'search') {
      return <Search navigator={navigator} events={this.eventEmitter} />
    }
  }
};

module.exports = DealsLayout;
