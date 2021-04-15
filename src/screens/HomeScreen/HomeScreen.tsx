import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import globalStyles from 'styles/GlobalStyles';
interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView
      style={[
        globalStyles().container,
        {justifyContent: 'center', flex: 1, alignItems: 'center'},
      ]}>
      <View>
        <Text>Hello, Admin</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
