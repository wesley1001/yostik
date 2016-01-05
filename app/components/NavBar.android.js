'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text,
  TextInput
} = React;

var Icon = require('react-native-vector-icons/MaterialIcons');

var globals = require('../globals');
var routes = require('../routes');

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: globals.colors.primary,
    shadowColor: '#111',
    shadowOpacity: .8,
    shadowRadius: 6
  },
  navBarText: {
    fontSize: 20,
    marginVertical: 14,
  },
  navBarTitleText: {
    color: '#FFF'
  },
  navBarLeftButton: {
    paddingLeft: 10,
    marginVertical: 14
  },
  navBarRightButton: {
    paddingRight: 10,
    marginVertical: 14
  },
  searchBox: {
    color: '#FFF'
  }
});

var NavigationBarRouteMapper = {
  Title(route, navigator, index, navState) {
    // console.log(navigator);
    // onChangeText={(query) => navigator.refs.searchScene.setState({query})}
    // onSubmitEditing={navigator.refs.searchScene.onSearch.bind(navigator.refs.searchScene)}
    // value={navigator.refs.searchScene.state.query}
    if(route.name === 'search') {
      return (
        <TextInput
          autoFocus={true}
          style={styles.searchBox}
          placeholder="Search games"
          placeholderTextColor="#EEE"
          underlineColorAndroid="#EEE"
          onSubmitEditing={(ev) => navigator.props.events.emit('search', ev.nativeEvent.text)} />
      );
    }

    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </Text>
    );
  },
  LeftButton(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    // var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    if (index === 0) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigator.push(routes.search.search);
          }}
          style={styles.navBarRightButton}>
          <Icon name="search" size={30} color="white" />
        </TouchableOpacity>
      );
    }

    return null;
  }
};

module.exports = (
  <Navigator.NavigationBar
    style={styles.navBar}
    routeMapper={NavigationBarRouteMapper} />
);
