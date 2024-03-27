import React, {useEffect, useMemo, useRef, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCategories} from '../../state/categorySlice';
import {selectRaces} from '../../state/racesSlice';
import {ListItem} from '../';
import {IRaceData} from '../../types';
import {calculateRemainingTime} from '../../utils';
import {styles} from './styles';

interface ListContainerProps {
  numberOfRaces?: number;
  fetchRaceData: () => void;
}

export const ListContainer = (props: ListContainerProps) => {
  const {numberOfRaces = 5, fetchRaceData} = props;
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
    if (timer.current) clearInterval(timer.current);
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

    const featuredResults = limitResults.splice(0, numberOfRaces);
    setFilteredRaces(featuredResults);

    /**
     * If we have less than 5 results & a category set, refetch the API
     */
    if (featuredResults.length < 5 && categories.length) {
      fetchRaceData();
    }
  };

  const renderRaceListItem = ({item}: {item: IRaceData; index: number}) => {
    const timeToStart = calculateRemainingTime(item.advertised_start.seconds);
    return (
      <ListItem
        key={item.meeting_id}
        meeting_name={item.meeting_name}
        race_name={item.race_name}
        race_number={item.race_number}
        timeToStart={timeToStart}
      />
    );
  };

  const orderListByStartTime = useMemo((): IRaceData[] => {
    return [...races].sort(
      (a, b) => a.advertised_start.seconds - b.advertised_start.seconds,
    );
  }, [races]);

  if (!filteredRaces.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.emptyResult}>
          No upcomings races 😔 {'\n'}try a different category
        </Text>
      </View>
    );
  }

  return <FlatList data={filteredRaces} renderItem={renderRaceListItem} />;
};

export default ListContainer;
