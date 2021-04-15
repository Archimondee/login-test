import FloatingTitleTextInputField from 'components/atoms/FloatingTextInputField/FloatingTextInputField';
import {FormError} from 'components/atoms/FormError/FormError';
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import globalStyles from 'styles/GlobalStyles';
import NavigationService from 'utils/NavigationService';
import styles from './LoginScreenStyle';

interface NewsfeedScreenProps {}

const LoginScreen = (props: NewsfeedScreenProps) => {
  const [email, useEmail] = useState('');
  const [emailErr, useEmailErr] = useState('');
  const [password, usePassword] = useState('');
  const [passwordErr, usePasswordErr] = useState('');
  const [securePassword, useSecurePassword] = useState(true);
  const [loginError, useLoginError] = useState('');
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

  const passwordHandler = (value: string) => {
    //usePassword(value);
    usePassword(value);
    if (value.length === 0) {
      usePasswordErr('Password tidak boleh kosong');
    } else if (value.length < 5) {
      usePasswordErr('Password tidak boleh kurang dari 5');
    } else {
      usePasswordErr('');
    }
  };

  const togglePassword = () => {
    useSecurePassword(!securePassword);
  };

  const checkDisabled = () => {
    return (
      email.length !== 0 &&
      emailErr === '' &&
      password.length !== 0 &&
      passwordErr === ''
    );
  };

  const submit = () => {
    if (email == 'Admin@admin.com' && password == 'admin') {
      useLoginError('');
      NavigationService.navigate('Home');
    } else {
      useLoginError('Username atau password yang anda masukan salah');
    }
  };
  return (
    <SafeAreaView style={[globalStyles().container, {paddingHorizontal: 5}]}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <View style={{marginTop: 150, marginBottom: 52}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={{color: '#4a4a4a', fontSize: 25}}>Login</Text>
          </View>
          <FloatingTitleTextInputField
            title="Alamat Email"
            value={email}
            updateMasterState={emailHandler}
            keyboardType={'email-address'}
          />
          <FormError message={emailErr} />
          <FloatingTitleTextInputField
            title="Password"
            value={password}
            updateMasterState={passwordHandler}
            secureTextEntry={securePassword}
            securePassword={securePassword}
            togglePassword={togglePassword}
          />
          <FormError message={passwordErr} />
          <TouchableOpacity
            onPress={submit}
            disabled={!checkDisabled()}
            style={styles(checkDisabled()).button}>
            <Text style={styles().buttonText}> Masuk </Text>
          </TouchableOpacity>
          <View style={styles().line} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('ForgotPassword')}>
              <Text style={{fontSize: 15, color: '#4fb5ea'}}>
                Lupa kata sandi ?
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 15, marginTop: 15}}>
              Tidak punya akun?
              <TouchableOpacity
                onPress={() => NavigationService.navigate('Signup')}>
                <Text style={{fontSize: 15, color: '#4fb5ea', marginTop: 3}}>
                  {' '}
                  Daftar
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
