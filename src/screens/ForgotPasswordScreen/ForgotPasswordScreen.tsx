import FloatingTitleTextInputField from 'components/atoms/FloatingTextInputField/FloatingTextInputField';
import {FormError} from 'components/atoms/FormError/FormError';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import globalStyles from 'styles/GlobalStyles';
import styles from './ForgotPasswordScreenStyles';

interface ForgotPasswordScreenProps {}

const ForgotPasswordScreen = (props: ForgotPasswordScreenProps) => {
  const [email, useEmail] = useState('');
  const [emailErr, useEmailErr] = useState('');
  const emailHandler = (value: string) => {
    useEmail(value);
    if (value.length === 0) {
      useEmailErr('Email tidak boleh kosong');
    } else if (value.length < 5) {
      useEmailErr('Email tidak boleh kurang dari 5');
    } else {
      useEmailErr('');
    }
  };

  const checkDisabled = () => {
    return emailErr === '' && email.length !== 0;
  };
  return (
    <SafeAreaView style={[globalStyles().container, {paddingHorizontal: 5}]}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <View style={{marginTop: 50, marginBottom: 52}}>
          <View
            style={{
              paddingHorizontal: 20,
              marginBottom: 20,
            }}>
            <Text style={{color: '#4a4a4a', fontSize: 14}}>
              Ini adalah fitur lupa password
            </Text>
          </View>
          <FloatingTitleTextInputField
            title="Alamat Email"
            value={email}
            updateMasterState={emailHandler}
            keyboardType={'email-address'}
          />
          <FormError message={emailErr} />

          <TouchableOpacity
            disabled={checkDisabled()}
            style={styles(checkDisabled()).button}>
            <Text style={styles().buttonText}> Kirim </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
