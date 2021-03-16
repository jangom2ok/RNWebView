/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <WebView
          source={
            {
              uri: '',
              headers: {
                'authorization': ''
              }
            }
          }
          style={styles.webview}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'blue'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  webview: {
    marginTop: 64,
  },
});

export default App;
