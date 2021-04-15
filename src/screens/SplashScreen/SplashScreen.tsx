import React, {useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import NavigationService from 'utils/NavigationService';
import styles from './SplashScreenStyles';

interface SplashScreenProps {}

const SplashScreen = (props: SplashScreenProps) => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.replace('Main');
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;
