import FloatingTitleTextInputField from 'components/atoms/FloatingTextInputField/FloatingTextInputField';
import {FormError} from 'components/atoms/FormError/FormError';
import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import globalStyles from 'styles/GlobalStyles';
import {TouchableOpacity} from 'react-native';
import styles from './SignupScreenStyles';
interface SignupScreenProps {}

const SignupScreen = (props: SignupScreenProps) => {
  const [email, useEmail] = useState('');
  const [emailErr, useEmailErr] = useState('');
  const [username, useUsername] = useState('');
  const [usernameErr, useUsernameErr] = useState('');
  const [password, usePassword] = useState('');
  const [passwordErr, usePasswordErr] = useState('');
  const [securePassword, useSecurePassword] = useState(true);
  const [confirmPassword, useConfirmPassword] = useState('');
  const [confirmPasswordErr, useConfirmPasswordErr] = useState('');
  const [secureeConfirmPassword, useSecureConfirmPassword] = useState(true);

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

  const usernameHandler = (value: string) => {
    useUsername(value);
    if (value.length === 0) {
      useUsernameErr('Username tidak boleh kosong');
    } else if (value.length < 5) {
      useUsernameErr('Username tidak boleh kurang dari 5');
    } else {
      useUsernameErr('');
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

  const confirmPasswordHandler = (value: string) => {
    //usePassword(value);
    usePassword(value);
    if (value.length === 0) {
      usePasswordErr('Konfirmasi password tidak boleh kosong');
    } else if (value !== password) {
      usePasswordErr('Password tidak cocok');
    } else {
      usePasswordErr('');
    }
  };

  const togglePassword = () => {
    useSecurePassword(!securePassword);
  };

  const checkDisabled = () => {
    return (
      emailErr.length !== 0 ||
      (passwordErr.length !== 0 && email.length !== 0 && password.length !== 0)
    );
  };
  return (
    <SafeAreaView style={[globalStyles().container, {paddingHorizontal: 5}]}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <View style={{marginTop: 40, marginBottom: 52}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={{color: '#4a4a4a', fontSize: 25}}>Register</Text>
          </View>
          <FloatingTitleTextInputField
            title="Alamat Email"
            value={email}
            updateMasterState={emailHandler}
            keyboardType={'email-address'}
          />
          <FormError message={emailErr} />
          <FloatingTitleTextInputField
            title="Username"
            value={username}
            updateMasterState={usernameHandler}
          />
          <FormError message={usernameErr} />
          <FloatingTitleTextInputField
            title="Password"
            value={password}
            updateMasterState={passwordHandler}
            secureTextEntry={securePassword}
            securePassword={securePassword}
            togglePassword={togglePassword}
          />
          <FormError message={passwordErr} />
          <FloatingTitleTextInputField
            title="Confirm Password"
            value={confirmPassword}
            updateMasterState={confirmPasswordHandler}
            secureTextEntry={securePassword}
            securePassword={securePassword}
            togglePassword={togglePassword}
          />
          <FormError message={confirmPasswordErr} />
          <TouchableOpacity
            disabled={checkDisabled()}
            style={styles(checkDisabled()).button}>
            <Text style={styles().buttonText}> Register </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;
