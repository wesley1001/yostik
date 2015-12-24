'use strict';

var React = require('react-native');
var {
  StyleSheet,
  ListView
} = React;

var GameCard = require('./GameCard');

var routes = require('../routes');

var games = [
  {
    id: 1,
    name: 'Star Wars Battlefront',
    platform: 'PlayStation 4',
    discountPercent: '50',
    oldPrice: '59.99',
    newPrice: '29.99',
    currency: 'USD',
    imageUrl: 'http://apollo2.dl.playstation.net/cdn/UP0006/CUSA00640_00/l7WgBMYNlCD4eXmaVAxV2F9JsREfgMsj.png'
  },
  {
    id: 2,
    name: 'Call of Duty: Black Ops 3',
    platform: 'PlayStation 4',
    discountPercent: '50',
    oldPrice: '59.99',
    newPrice: '29.99',
    currency: 'USD',
    imageUrl: 'http://apollo2.dl.playstation.net/cdn/UP0002/CUSA03004_00/OKaCdS4DjU93gFE3xfaziVPFJS5ZK7KE.png'
  },
  {
    id: 3,
    name: 'Fallout 4',
    platform: 'PlayStation 4',
    discountPercent: '50',
    oldPrice: '59.99',
    newPrice: '29.99',
    currency: 'USD',
    imageUrl: 'http://apollo2.dl.playstation.net/cdn/UP1003/CUSA03448_00/mdr0BrNpWsRvtzn17zbw1J2WIMMogzy9.png'
  }
];

var styles = StyleSheet.create({
  list: {
    marginTop: 44
  }
});

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds.cloneWithRows(games)
    }
  }

  render() {
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
    // var route = routes.friends.profile;
    // route.title = rowData.name;
    // route.userInfo = rowData;
    // this.props.navigator.push(route);
    return false;
  }
};

module.exports = GamesList;
