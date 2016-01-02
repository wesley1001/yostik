'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView,
  ScrollView,
  TextInput,
  Platform
} = React;

var GameRow = require('./GameRow');

var routes = require('../routes');
var api = require('../api');

var styles = StyleSheet.create({
  container: {
    marginTop: 44
  },
  searchBox: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 10,
    borderRadius: 10
  },
  list: {
    marginTop: 0
  }
});

class Search extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      query: '',
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    // TODO: Revisit this once the searchbar is on the here in iOS
    if(this.props.events) {
      this.props.events.addListener('search', (query) => {
        this.setState({query});
        this.onSearch();
      });
    }
  }

  render() {
    // TODO: Remove Searchbar from here once it's on the header in iOS
    var searchBar;
    if(Platform.OS === 'ios') {
      searchBar = (
        <TextInput
          placeholder="Search..."
          style={styles.searchBox}
          onChangeText={(query) => this.setState({query})}
          onSubmitEditing={this.onSearch.bind(this)}
          value={this.state.query}
        />
      );
    }

    return (
      <ScrollView style={styles.container}>
        {searchBar}
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)} />
      </ScrollView>
    );
  }

  renderRow(rowData, sectionID, rowID) {
    return (
      <GameRow
        onSelect={() => this.onSelectGame(rowData)}
        key={rowData.id}
        game={rowData} />
    );
  }

  onSearch() {
    var query = this.state.query;
    api.search(query)
      .then((res) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(res.results)
        });
      });
  }

  onSelectGame(rowData) {
    var route = routes.details.details;
    route.title = rowData.name;
    route.gameInfo = rowData;
    this.props.navigator.push(route);
  }
};

module.exports = Search;
