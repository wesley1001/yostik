'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  View,
  Text
} = React;

var CountryRow = require('./CountryRow');

var routes = require('../routes');
var api = require('../api');

var styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 14
  },
  list: {
    marginTop: 0
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#444',
    marginBottom: 10
  }
});

class GameCompare extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      query: '',
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    this.getCompare();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>COMPARE PRICES IN OTHER STORES</Text>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </View>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <CountryRow
        onSelect={() => this.onSelectRow(rowData)}
        key={rowData.id}
        game={rowData} />
    );
  }

  getCompare() {
    var query = this.props.game.name;
    var cid = this.props.game.id;

    api.compare(query, cid)
      .then((res) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(res.results)
        });
      });
  }

  getStoreForURL(store) {
    var pieces = store.toLowerCase().split('/');
    return pieces[1] + '-' + pieces[0];
  }

  onSelectRow(rowData) {
    var route = routes.details.deal;
    var store = this.getStoreForURL(rowData.store);
    route.url = `https://store.playstation.com/#!/${store}/games/adventures-of-pip/cid=${rowData.id}`;
    this.props.navigator.push(route);
  }
};

module.exports = GameCompare;
