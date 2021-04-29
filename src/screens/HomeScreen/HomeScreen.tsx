import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import globalStyles from 'styles/GlobalStyles';
import NavigationService from 'utils/NavigationService';
interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={[globalStyles().container]}>
      <View style={{paddingTop: 100}}>
        <View
          style={{
            backgroundColor: '#f4f4f4',
            paddingVertical: 10,
            //paddingHorizontal: 40,
            borderRadius: 20,
          }}>
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>
              Employee Privileges
            </Text>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('Credit')}>
              <Text style={{color: '#707070'}}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{paddingVertical: 10, paddingHorizontal: 30}}
            showsHorizontalScrollIndicator={false}>
            <View>
              <Image
                source={require('../../assets/banner_adira_1.png')}
                style={{height: 181, width: 312}}
              />
            </View>
            <View style={{paddingHorizontal: 10, marginRight: 50}}>
              <Image
                source={require('../../assets/banner_adira_2.png')}
                style={{height: 181, width: 312}}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
