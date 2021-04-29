import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import globalStyles from 'styles/GlobalStyles';
import NavigationService from 'utils/NavigationService';

interface CreditScreenProps {}

const CreditScreen = (props: CreditScreenProps) => {
  return (
    <View style={[globalStyles('#f4f4f4').container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require('../../assets/banner_adira_1.png')}
          style={{height: 195, width: '100%'}}
          resizeMode="stretch"
        />
        <View
          style={{
            paddingHorizontal: 30,
            backgroundColor: '#fafafa',
            paddingBottom: 20,
          }}>
          <Text
            style={{
              paddingTop: 30,
              fontWeight: 'bold',
              fontSize: 17,
              paddingBottom: 20,
            }}>
            Kredit Multiguna
          </Text>
          <Text style={{fontSize: 13, lineHeight: 20}}>
            Pembiayaan Multiguna adalah pembiayaan barang dan/atau jasa yang
            diperlukan oleh Konsumen untuk pemakaian/konsumsi dalam jangka waktu
            yang dijanjikan. {'\n\n'}Jaminan untuk pembiayaan multiguna ADIRA
            FINANCE adalah BPKB kendaraan bermotor roda 2 (dua) dan roda 4
            (empat).
          </Text>
          <View style={{paddingTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 13}}>
              Syarat dan ketentuan :
            </Text>
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
              }}>
              <Text style={{color: 'gray', fontSize: 8, paddingTop: 3}}>
                {'\u2B24'}
              </Text>
              <Text style={{paddingLeft: 5}}> Fotokopi KTP </Text>
            </View>
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
              }}>
              <Text style={{color: 'gray', fontSize: 8, paddingTop: 3}}>
                {'\u2B24'}
              </Text>
              <Text style={{paddingLeft: 5}}> Fotokopi Kartu Keluarga </Text>
            </View>
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{color: 'gray', fontSize: 8}}>{'\u2B24'}</Text>
              <Text style={{paddingLeft: 5}}> Slip Gaji </Text>
            </View>
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
              }}>
              <Text
                style={{color: 'gray', fontSize: 8, paddingTop: 3}}
                numberOfLines={2}>
                {'\u2B24'}
              </Text>
              <Text style={{paddingLeft: 5}} numberOfLines={2}>
                Salinan rekening koran atau tabungan 3 bulan terakhir
              </Text>
            </View>
            <View
              style={{
                paddingTop: 10,
                flexDirection: 'row',
              }}>
              <Text style={{color: 'gray', fontSize: 8, paddingTop: 3}}>
                {'\u2B24'}
              </Text>
              <Text style={{paddingLeft: 5}}>
                Salinan STNK dan BPKB kendaraan asli yang hendak anda jaminkan.
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 30,
            backgroundColor: '#fafafa',
            paddingBottom: 20,
            marginTop: 10,
            marginBottom: 100,
          }}>
          <Text
            style={{
              paddingTop: 30,
              fontWeight: 'bold',
              fontSize: 17,
              paddingBottom: 20,
            }}>
            Pertanyaan yang sering diajukan
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#fafafa',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 30,
          paddingVertical: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,

          elevation: 3,
        }}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate('CreditInfo')}
          style={{
            paddingVertical: 15,
            backgroundColor: '#2573D5',
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 13,
              color: '#fafafa',
              fontWeight: 'bold',
            }}>
            Ajukan Pinjaman
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreditScreen;

const styles = StyleSheet.create({
  container: {},
});
