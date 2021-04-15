import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 50,
    marginVertical: 4,
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 20,
  },
  textInput: {
    fontSize: 14,
    paddingTop: 20,
    top: 3,
    paddingLeft: 0,
    color: '#000',
  },
  titleStyles: {
    position: 'absolute',

    left: 0,
    color: '#9b9b9b',
    right: 4,
  },
  label: {
    color: '#4a4a4a',
    fontSize: 14,
  },
  websiteLabelContainer: {
    width: 54,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    marginRight: 5,
  },
  instagramLabelContainer: {
    width: 30,
    height: 18,
    borderRadius: 4,
    backgroundColor: '#EEE',
    justifyContent: 'center',
    alignItems: 'center',
    top: 22,
    marginRight: 3,
  },
  wordCountContainer: {
    marginRight: 20,
    alignItems: 'flex-end',
  },
  wordCount: {
    fontSize: 8,
    color: '#4a4a4a',
  },
  revealPasswordContainer: {
    paddingTop: 20,
    height: 50,
    width: 50,
    alignItems: 'flex-end',
  },
  revealPasswordLabel: {
    fontSize: 12,
    color: '#4a4a4a',
  },
});

export default styles;
