import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import globalStyles from 'styles/GlobalStyles';

interface CreditInfoScreenProps {}

const CreditInfoScreen = (props: CreditInfoScreenProps) => {
  return (
    <ScrollView
      style={[globalStyles('#ffffff').container, {paddingBottom: 100}]}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: '#ffffff',
          margin: 20,
          borderRadius: 20,
          padding: 20,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <View style={{borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5'}}>
          <Text style={{fontSize: 13, color: '#a8a8a8'}}>Jenis kendaraan</Text>
          <TextInput
            placeholder={'Honda'}
            style={{paddingTop: 10}}
            value={'Honda'}
          />
          <View style={{paddingTop: 10}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: 10,
          }}>
          <View style={{flex: 1.2, marginRight: 20}}>
            <Text style={{fontSize: 13, color: '#a8a8a8'}}>Tipe Kendaraan</Text>
            <TextInput
              placeholder={'Vario CBS 110'}
              style={{paddingTop: 10}}
              value={'Vario CBS 110'}
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 13, color: '#a8a8a8'}}>
              Tahun Kendaraan
            </Text>
            <TextInput
              placeholder={'2017'}
              style={{paddingTop: 10}}
              keyboardType={'number-pad'}
              value={'2017'}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: '#e5e5e5',
            paddingTop: 10,
          }}
        />

        {/* Bottom Card */}
        <View style={{paddingTop: 20, alignItems: 'center'}}>
          <Text style={{fontSize: 13, color: '#707070'}}>
            {' '}
            Dapatkan pinjaman hingga
          </Text>
          <View style={{flexDirection: 'row', marginTop: 5}}>
            <Text style={{paddingTop: 5, color: '#2573D5', fontWeight: 'bold'}}>
              Rp{' '}
            </Text>
            <Text style={{fontSize: 28, color: '#2573D5', fontWeight: 'bold'}}>
              3.994.000
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              //backgroundColor: 'red',
              marginTop: 20,
            }}>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/card.png')}
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                width={30}
                height={30}
              />
              <Text style={{paddingTop: 10, fontSize: 10, color: '#707070'}}>
                Syarat{' '}
                <Text style={{color: 'black', fontWeight: 'bold'}}>Mudah</Text>
              </Text>
            </View>
            <View style={{borderLeftWidth: 0.5, borderColor: '#2573D5'}} />
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/percentage.png')}
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                width={30}
                height={30}
              />
              <Text style={{paddingTop: 10, fontSize: 10, color: '#707070'}}>
                Bunga{' '}
                <Text style={{color: 'black', fontWeight: 'bold'}}>Rendah</Text>
              </Text>
            </View>
            <View style={{borderLeftWidth: 0.5, borderColor: '#2573D5'}} />
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/shield.png')}
                style={{height: 30, width: 30, resizeMode: 'contain'}}
                width={30}
                height={30}
              />
              <Text style={{paddingTop: 10, fontSize: 10, color: '#707070'}}>
                Dijamin{' '}
                <Text style={{color: 'black', fontWeight: 'bold'}}>Aman</Text>
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#2573d5',
              paddingVertical: 20,
              width: '100%',
              borderRadius: 8,
            }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 'bold',
                color: '#fafafa',
                textAlign: 'center',
              }}>
              Ajukan Pinjaman
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../../assets/logo-adira.png')}
            style={{marginTop: 30, marginBottom: 10}}
          />
        </View>
      </View>

      <View
        style={{
          //backgroundColor: '#ffffff',
          //   margin: 20,
          borderRadius: 20,
          padding: 20,
        }}>
        <Text style={{color: '#29304D', fontSize: 17, fontWeight: 'bold'}}>
          Instant Tunai
        </Text>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <LinearGradient
            start={{x: 0.01, y: 0.01}}
            end={{x: 0.3, y: 1.5}}
            locations={[0, 0.3, 0.6]}
            colors={['#2573d5', '#fafafa', '#fafafa']}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              marginTop: 20,
              //marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, color: '#29304D'}}>
                Angsuran Tiap Bulan
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2573d5',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                  marginTop: 10,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 13}}>
                  Ajukan
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginVertical: 10,
              }}>
              <View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text
                    style={{
                      paddingTop: 1,
                      color: '#2573D5',
                      fontWeight: 'bold',
                    }}>
                    Rp{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 23,
                      color: '#2573D5',
                      fontWeight: 'bold',
                    }}>
                    430.782
                  </Text>
                </View>
                <Text style={{fontSize: 11, color: '#707070'}}>Per Bulan</Text>
              </View>
              <View>
                <Text style={{fontSize: 11, color: '#707070'}}>
                  Jumlah tenor
                </Text>
                <Text style={{fontSize: 11, color: '#707070'}}>12 Bulan</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          }}>
          <LinearGradient
            start={{x: 0.01, y: 0.01}}
            end={{x: 0.3, y: 1.5}}
            locations={[0, 0.3, 0.6]}
            colors={['#2573d5', '#fafafa', '#fafafa']}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              marginTop: 20,
              //marginHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 15, color: '#29304D'}}>
                Angsuran Tiap Bulan
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2573d5',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 20,
                  marginTop: 10,
                }}>
                <Text
                  style={{color: 'white', fontWeight: 'bold', fontSize: 13}}>
                  Ajukan
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginVertical: 10,
              }}>
              <View>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Text
                    style={{
                      paddingTop: 1,
                      color: '#2573D5',
                      fontWeight: 'bold',
                    }}>
                    Rp{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: 23,
                      color: '#2573D5',
                      fontWeight: 'bold',
                    }}>
                    265.155
                  </Text>
                </View>
                <Text style={{fontSize: 11, color: '#707070'}}>Per Bulan</Text>
              </View>
              <View>
                <Text style={{fontSize: 11, color: '#707070'}}>
                  Jumlah tenor
                </Text>
                <Text style={{fontSize: 11, color: '#707070'}}>24 Bulan</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>

      <LinearGradient
        colors={['#2E75D5', '#2573d5']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={{
          //backgroundColor: '#2573d5',
          marginBottom: 100,
          //height: 144,
          //width: '100%',
          paddingHorizontal: 80,
          paddingVertical: 20,
          margin: 20,
          borderRadius: 20,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Kami adalah platfrom resmi dan bekerja sama dengan
        </Text>
        <Image
          source={require('../../assets/adira-white.png')}
          style={{marginTop: 40, marginBottom: 30}}
        />
      </LinearGradient>
    </ScrollView>
  );
};

export default CreditInfoScreen;

const styles = StyleSheet.create({
  container: {},
});
