import {StyleSheet} from 'react-native';
import {size, font, colors} from '../../config';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.light,
    borderBottomColor: colors.medium,
    borderBottomWidth: 1,
    paddingHorizontal: size.medium,
    paddingVertical: size.medium,
  },
  buttonPressed: {
    opacity: 0.9,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meetingName: {
    fontSize: font.body,
    color: colors.dark,
  },
  raceName: {
    fontSize: font.small,
    color: colors.dark,
  },
  raceNumber: {
    fontSize: font.body,
    color: colors.primary,
  },
  time: {
    fontSize: font.body,
    color: colors.primary,
    textAlign: 'right',
  },
});
