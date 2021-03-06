//
//  App.js
//  CryptoTracker
//
//  Created by William Williams on 3/22/18.
//  Copyright © 2018 DSC. All rights reserved.
//

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './src/Store';
import { Header, CryptoContainer } from './src/components';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          <Header/>
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
