var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet,
  Platform
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: (Platform.OS === 'ios') ? 60 : 56
  },
});

class Web extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url} javaScriptEnabledAndroid={true}/>
      </View>
    );
  }
};

Web.propTypes = {
 url: React.PropTypes.string.isRequired
};

module.exports = Web;
