// @ts-ignore
import { StyleSheet, Platform } from 'react-native';

const style = StyleSheet.create({
  toastWrapper: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 12,
    textAlign: 'center',
    zIndex: 100000000000,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    borderRadius: 6,
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOpacity: 2 * 0.08,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        overflow: 'visible',
      },
      android: {
        elevation: 4,
      },
    }),
  },
  toastMessage: {
    color: '#ffffff',
    fontWeight: '600',
  },
  animation: {
    width: 40,
    height: 40,
  },
  successImage: {
    width: 25,
    height: 25,
    marginRight: 8,
  },
});

export default style;
