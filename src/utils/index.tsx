import {IRaceDataDTO} from '../App';
import {NEDS_ENDPOINT} from '../config';

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
