'use strict';

var React = require('react-native');
var {
  StyleSheet,
  DrawerLayoutAndroid,
  View, Text
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
  render() {
    return <DealsLayout />;

    // var navigationView = (
    //   <View style={{flex: 1, backgroundColor: '#fff'}}>
    //     <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
    //   </View>
    // );
    // return (
    //   <DrawerLayoutAndroid
    //     drawerWidth={300}
    //     drawerPosition={DrawerLayoutAndroid.positions.Left}
    //     renderNavigationView={() => navigationView}>
    //     <View style={{flex: 1, alignItems: 'center'}}>
    //       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
    //       <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
    //     </View>
    //   </DrawerLayoutAndroid>
    // );

    // return (
    //   <TabBarIOS
    //     tintColor={globals.colors.primary}
    //     barTintColor="white">
    //     <TabBarIOS.Item
    //       title="Deals"
    //       icon={require('../img/icons/deals.png')}
    //       selected={(this.state.selectedTab === 'deals')}
    //       onPress={() => this.setState({selectedTab: 'deals'})}>
    //       <DealsLayout />
    //     </TabBarIOS.Item>
    //     <TabBarIOS.Item
    //       title="Search"
    //       icon={require('../img/icons/search.png')}
    //       selected={(this.state.selectedTab === 'search')}
    //       onPress={() => this.setState({selectedTab: 'search'})}>
    //       <SearchLayout />
    //     </TabBarIOS.Item>
    //   </TabBarIOS>
    // );
  }
};

module.exports = App;
