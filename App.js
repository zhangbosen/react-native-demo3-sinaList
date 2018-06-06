
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  PixelRatio
} from 'react-native';

import Cell from './components/subComponents/Cell';

const sinaData = require("./localData/sinaData.json");

export default class App extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds
    }

  }
  
  render() {
    return (
      <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}

      />
    );
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(sinaData)
    })
  }

  _renderRow(rowData, sectionId, rowId) {
    return (
        <Cell rowData={rowData} />
    )
  }



}

