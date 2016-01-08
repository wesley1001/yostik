'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TouchableOpacity,
  Text
} = React;

var globals = require('../globals');

var styles = StyleSheet.create({
  button: {
    backgroundColor: globals.colors.secondary,
    borderRadius: 28,
    width: 200,
    padding: 16,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

module.exports = Button;
