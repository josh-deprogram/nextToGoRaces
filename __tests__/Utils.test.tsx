/**
 * @format
 */

import 'react-native';
import {calculateRemainingTime} from '../src/utils';

it('given activity start time, calculateRemainingTime() returns time to event', () => {
  // Expected result is of ITimeToStart type
  expect(typeof calculateRemainingTime(75055050)).toBe('object');
});
