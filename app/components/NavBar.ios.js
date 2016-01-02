'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Navigator,
  TouchableOpacity,
  Text,
  Image
} = React;

var Icon = require('react-native-vector-icons/Ionicons');

var globals = require('../globals');

var styles = StyleSheet.create({
  navBar: {
    backgroundColor: globals.colors.primary,
    shadowColor: '#111',
    shadowOpacity: .8,
    shadowRadius: 6
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#FFF',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  }
});

var NavigationBarRouteMapper = {
  Title(route, navigator, index, navState) {
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
        <Icon name="ios-arrow-back" size={30} color="white" />
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    if(index === 0) {
      return (
        <TouchableOpacity
          onPress={() => navigator.pop()}
          style={styles.navBarRightButton}>
          <Image source={{uri: '../../img/icons/filter.png'}} />
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
