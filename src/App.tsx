import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {setRaces} from './state/racesSlice';

import {ListHeader, ListContainer} from './components';
import {convertRaceResultsToArray, fetchRaceData} from './utils';
import {colors} from './config';

function App(): React.JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchRaceResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchRaceResults = async () => {
    fetchRaceData({count: 40})
      .then(response => {
        const data = response.data;
        dispatch(setRaces(convertRaceResultsToArray(data.race_summaries)));
        // console.log(data, 'length', data.length);
      })
      .catch(e => {
        console.error('Failed to fetch races', e);
      });
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <ListHeader
        title={'neds : next to go'}
        sub="Entain - Neds Races Concept"
      />
      <ListContainer fetchRaceData={fetchRaceResults} />
    </SafeAreaView>
  );
}

export default App;
