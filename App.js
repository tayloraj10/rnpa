import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class MainView extends Component {
  render() {
      return (
        <View style={styles.mainView}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              PAW
            </Text>
          </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  mainView: {

  },
  headerContainer: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 10,
    backgroundColor: '#36D4FF'
  },
  headerText: {
    fontSize: 36,
    fontFamily: 'sans-serif-medium',
  }
});