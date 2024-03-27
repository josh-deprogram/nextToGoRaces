import {StyleSheet} from 'react-native';
import {size, font, colors} from '../../config';

export const styles = StyleSheet.create({
  container: {
    padding: size.medium,
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.light,
    fontSize: font.title,
    fontWeight: '800',
  },
  subhead: {
    color: colors.light,
    marginTop: size.small,
    fontSize: font.body,
    fontWeight: '400',
  },
  navRow: {
    paddingTop: size.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
