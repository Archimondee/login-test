import {StyleSheet} from 'react-native';

const styles = (isDisabled?: boolean) =>
  StyleSheet.create({
    button: {
      marginTop: 35,
      alignItems: 'center',
      paddingVertical: 20,
      backgroundColor: !isDisabled ? '#4a4a4a' : '#4fb5ea',
      marginHorizontal: 10,
    },
    buttonText: {
      fontSize: 14,
      color: '#ffffff',
    },
    line: {
      marginVertical: 30,
      marginHorizontal: 60,
      height: 2,
      borderRadius: 4,
      borderColor: '#979797',
      borderWidth: 0.2,
    },
  });

export default styles;
