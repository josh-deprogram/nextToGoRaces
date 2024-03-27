import {StyleSheet} from 'react-native';
import {size, colors} from '../../config';

export const styles = StyleSheet.create({
  container: {
    padding: size.medium,
    paddingTop: size.xl,
    backgroundColor: colors.primary,
  },
  emptyResult: {
    color: colors.light,
    fontSize: size.medium,
    fontWeight: '800',
    textAlign: 'center',
  },
});
