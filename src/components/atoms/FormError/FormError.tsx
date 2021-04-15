import React from 'react';
import {View, Text} from 'react-native';

interface FormErrorsProps {
  message: string;
  align?: any;
}

export const FormError = (props: FormErrorsProps) => {
  const {message, align} = props;
  return message ? (
    <View style={{marginHorizontal: 20, marginTop: -10, marginBottom: 10}}>
      <Text
        style={{
          color: '#ff5469',
          fontSize: 10,
          textAlign: align || 'left',
        }}>
        {message}
      </Text>
    </View>
  ) : null;
};
