import {StyleSheet} from 'react-native';
import {size, colors} from '../../config';

export const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.secondary,
    padding: size.medium,
    minWidth: 100,
    borderRadius: size.small,
    borderWidth: 2,
    borderColor: colors.highlight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.5,
    transform: [{scale: 0.95}],
  },
  buttonActive: {
    backgroundColor: colors.highlight,
    borderColor: colors.medium,
  },
});
