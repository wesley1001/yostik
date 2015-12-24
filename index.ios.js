/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBarIOS
} = React;

var App = require('./app/App');

var Yostik = React.createClass({
  componentDidMount: function() {
    StatusBarIOS.setStyle('light-content', true);
  },

  render: function() {
    return (
      <App />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

AppRegistry.registerComponent('Yostik', () => Yostik);
