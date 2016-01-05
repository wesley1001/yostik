'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
  Text
} = React;

var routes = require('../routes');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class Spinner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
};

module.exports = Spinner;
