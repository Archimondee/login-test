import AppNavigator from 'navigations/AppNavigator';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
