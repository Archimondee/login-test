import React, {useState, useEffect} from 'react';
import {
  View,
  Animated,
  TextInput,
  TextInputProperties,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './FloatingTextInputFieldStyles';

interface FloatTitleTextInputFieldProps extends TextInputProperties {
  title: string;
  value: string | any;
  index?: number;
  securePassword?: boolean;
  showCounter?: boolean;
  maxCharacter?: number;
  instagram?: boolean;
  website?: boolean;
  updateMasterState: (arg1: string, arg2?: number) => void;
  togglePassword?: () => void;
  toggleConfirmPassword?: () => void;
  toggleGroupChatEdit?: () => void;
}

const FloatingTitleTextInputField = (props: FloatTitleTextInputFieldProps) => {
  const [isFieldActive, useIsFieldActive] = useState(false);
  const [characterLength, useCharacterLength] = useState(0);
  const [position] = useState(new Animated.Value(0));

  const handleFocus = () => {
    if (!isFieldActive) {
      useIsFieldActive(true);
      Animated.timing(position, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const handleBlur = () => {
    if (isFieldActive && !props.value) {
      useIsFieldActive(false);
      Animated.timing(position, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false,
      }).start();
    }
  };

  const onChangeText = (updatedValue: string) => {
    const {updateMasterState, index} = props;
    console.log('updated', updatedValue, value);
    updateMasterState(updatedValue, index);
    if (showCounter) {
      useCharacterLength(updatedValue.length);
    }
  };

  const returnAnimatedTitleStyles = () => {
    return {
      top:
        !props.value && !website && !instagram
          ? position.interpolate({
              inputRange: [0, 1],
              outputRange: [14, 0],
            })
          : null,
      fontSize: isFieldActive || props.value || website || instagram ? 11 : 16,
      color:
        isFieldActive || props.value || website || instagram
          ? '#65b6e5'
          : '#9b9b9b',
    };
  };

  const returnContainerStyles = () => {
    return {
      borderBottomColor:
        isFieldActive || props.value || website || instagram
          ? '#4a90e2'
          : '#EEE',
    };
  };

  const renderPasswordField = () => {
    return title === 'Password' ||
      title === 'Old Password' ||
      title === 'New Password' ||
      title === 'Confirm Password' ? (
      <TouchableOpacity
        onPress={togglePassword}
        style={styles.revealPasswordContainer}>
        <Text style={styles.revealPasswordLabel}>
          {securePassword ? 'Show' : 'Hide'}
        </Text>
      </TouchableOpacity>
    ) : null;
  };

  const {
    title,
    value,
    securePassword,
    togglePassword,
    maxCharacter,
    showCounter,
    instagram,
    website,
  } = props;
  return (
    <View
      style={{
        marginBottom: 15,
      }}>
      <View style={[styles.container, returnContainerStyles()]}>
        <View style={{flex: 1}}>
          <Animated.Text
            style={[styles.titleStyles, returnAnimatedTitleStyles()]}>
            {title}
          </Animated.Text>
          <View style={{flexDirection: 'row'}}>
            {instagram ? (
              <View style={styles.instagramLabelContainer}>
                <Text style={styles.label}>@</Text>
              </View>
            ) : null}
            {website ? (
              <View style={styles.websiteLabelContainer}>
                <Text style={styles.label}>https://</Text>
              </View>
            ) : null}
            <TextInput
              value={value}
              style={[styles.textInput, {zIndex: 2, flex: 1}]}
              underlineColorAndroid="transparent"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={onChangeText}
              keyboardType={'default'}
              {...props}
            />
          </View>
        </View>
        {renderPasswordField()}
      </View>
      {showCounter ? (
        <View style={styles.wordCountContainer}>
          <Text style={styles.wordCount}>
            {characterLength}/{maxCharacter}
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default FloatingTitleTextInputField;
