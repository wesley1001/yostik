'use strict';

var React = require('react-native');
var {
  StyleSheet,
  TabBarIOS
} = React;

var Deals = require('./components/Deals');
// var Search = require('./components/Search');

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
  render() {
    return (
      <TabBarIOS
        tintColor={globals.colors.primary}
        barTintColor="white">
        <TabBarIOS.Item
          title="Deals"
          icon={require('../img/icons/deals.png')}
          selected={(this.state.selectedTab === 'deals')}
          onPress={() => this.setState({selectedTab: 'deals'})}>
          <Deals />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Search"
          icon={require('../img/icons/search.png')}
          selected={(this.state.selectedTab === 'search')}
          onPress={() => this.setState({selectedTab: 'search'})}>
          <Deals />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

module.exports = App;
