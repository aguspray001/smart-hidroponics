import React from 'react';
import {StyleSheet, LogBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import Home from './screens/Home';

// Ignore all log notifications:
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      <Home />
      <FlashMessage position="center" duration={3000} hideStatusBar={false} />
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
