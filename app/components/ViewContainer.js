'use strict'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

class ViewContainer extends Component {
  render() {
    return (
      <View style={styles.viewContainer}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  }
})

module.exports = ViewContainer
