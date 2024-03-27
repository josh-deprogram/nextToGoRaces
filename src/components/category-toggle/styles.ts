import {StyleSheet} from 'react-native';
import {size, colors} from '../../config';

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.secondary,
    padding: size.medium,
    minWidth: 100,
    borderRadius: size.small,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.9,
  },
  buttonActive: {
    backgroundColor: colors.highlight,
  },
});
