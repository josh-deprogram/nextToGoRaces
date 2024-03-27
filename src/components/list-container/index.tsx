import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {ListItem} from '../';
import {IRaceData} from '../../types';
import {calculateRemainingTime} from '../../utils';
import {useSelector} from 'react-redux';
import {selectCategories} from '../../state/categorySlice';
import {selectRaces} from '../../state/racesSlice';

interface ListContainerProps {
  numberOfRaces?: number;
}

export const ListContainer = (props: ListContainerProps) => {
  const {numberOfRaces = 5} = props;
  const [filteredRaces, setFilteredRaces] = useState<IRaceData[]>([]);
  const categories = useSelector(selectCategories);
  const races = useSelector(selectRaces);
  let timer: any | null = useRef(null);

  useEffect(() => {
    /**
     * Create an interval to check the race start times
     * and filter out and races that have passed over 60 seconds the start time
     * then filter via the active category type
     */
    timer.current = setInterval(() => {
      filterListItems();
    }, 1000);

    // Fire the filter immediately
    filterListItems();

    return () => {
      clearInterval(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [races, categories]);

  const filterListItems = () => {
    const currentTimeInSeconds = Date.now() / 1000;
    const limitResults = orderListByStartTime
      .filter(r => {
        return currentTimeInSeconds - r.advertised_start.seconds <= 60;
      })
      .filter(r => categories.includes(r.category_id));

    setFilteredRaces(limitResults.splice(0, numberOfRaces));
  };

  const renderRaceListItem = ({item}: {item: IRaceData; index: number}) => {
    return (
      <ListItem
        key={item.meeting_id}
        meeting_name={item.meeting_name}
        race_name={item.race_name}
        race_number={item.race_number}
        timeToStart={calculateRemainingTime(item.advertised_start.seconds)}
      />
    );
  };

  const orderListByStartTime = useMemo((): IRaceData[] => {
    return [...races].sort(
      (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
    );
  }, [races]);

  return <FlatList data={filteredRaces} renderItem={renderRaceListItem} />;
};

export default ListContainer;
