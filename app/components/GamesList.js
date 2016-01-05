'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  Platform
} = React;

var GameCard = require('./GameCard');
var Spinner = require('./Spinner');

var routes = require('../routes');
var api = require('../api');

var styles = StyleSheet.create({
  list: {
    marginTop: (Platform.OS === 'ios') ? 44 : 56
  }
});

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      loading: true,
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount() {
    this.getDeals();
  }

  render() {
    if(this.state.loading) {
      return <Spinner />;
    }

    return (
      <ListView
        style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)} />
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <GameCard
        onSelect={() => this.onSelectGame(rowData)}
        key={rowData.id}
        game={rowData} />
    );
  }

  onSelectGame(rowData) {
    var route = routes.details.details;
    route.title = rowData.name;
    route.gameInfo = rowData;
    this.props.navigator.push(route);
  }

  getDeals() {
    this.setState({loading: true});
    api.deals()
      .then((res) => {
        this.setState({
          loading: false,
          dataSource: this.state.dataSource.cloneWithRows(res.results)
        });
      });
  }
};

module.exports = GamesList;
