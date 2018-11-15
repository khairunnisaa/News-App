import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const itemName = navigation.getParam('itemName', 'NO-Name');
    const itemUrl = navigation.getParam('itemUrl', 'NO-Url');
    return (
      <WebView
        source={{uri: itemUrl}}
      />
    );
  }
}

export default MyWeb;