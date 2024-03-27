import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {ListHeader} from './components';
import {convertRaceResultsToArray, fetchRaceData} from './utils';
import {colors} from './config';
import {IRaceData} from './types';
import ListContainer from './components/list-container';

function App(): React.JSX.Element {
  const [races, setRaces] = useState<IRaceData[]>([]);

  useEffect(() => {
    fetchRaceData({count: 20}).then(response => {
      const data = response.data;
      console.log('race data', data);
      setRaces(convertRaceResultsToArray(data.race_summaries));
    });
  }, []);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <ListHeader
        title={'neds : next to go'}
        sub="Entain - Neds Races Concept"
      />
      <ListContainer races={races} />
    </SafeAreaView>
  );
}

export default App;
