import {IRaceDataDTO} from '../types';
import {NEDS_ENDPOINT} from '../config';
import {ITimeToStart} from '../types';

/**
 * Fetch upcoming Race data
 * @param count
 * @param method
 * @returns
 */
export const fetchRaceData = async ({
  count = 10,
  method = 'nextraces',
}: {
  count?: number;
  method?: string;
}) => {
  try {
    const response = await fetch(
      `${NEDS_ENDPOINT}/racing/?method=${method}&count=${count}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
    return null;
  }
};

/**
 * Strip the key indentifier from Race data and return a data array
 * @returns
 */
export const convertRaceResultsToArray = (raceResults: IRaceDataDTO): any[] => {
  return Object.values(raceResults);
};

export const calculateRemainingTime = (
  advertisedStartInSeconds: number,
): ITimeToStart => {
  // Get current time in seconds
  const currentTimeInSeconds = Date.now() / 1000;

  // Calculate remaining time until the race starts
  const remainingTimeInSeconds =
    advertisedStartInSeconds - currentTimeInSeconds;

  // Convert remaining time into hours, minutes, and seconds
  const minutes = Math.floor((remainingTimeInSeconds % 3600) / 60);
  const seconds = Math.floor(remainingTimeInSeconds % 60);

  // Return remaining time as a string
  return {minutes, seconds};
};
