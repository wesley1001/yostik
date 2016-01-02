'use strict';

var React = require('react-native');
var {
  StyleSheet,
  BackAndroid
} = React;

var DealsLayout = require('./components/DealsLayout');
var SearchLayout = require('./components/SearchLayout');

var globals = require('./globals');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'deals'
    }
  }

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._handleBackButtonPress.bind(this));
  }

  render() {
    return <DealsLayout ref="deals" />;
  }

  _handleBackButtonPress() {
    var navigator = this.refs.deals.refs.navigator;
    var routes = navigator.getCurrentRoutes();

    if(routes[routes.length - 1].name !== 'list') {
      navigator.pop();
      return true;
    }

    return false;
  }
};

module.exports = App;
