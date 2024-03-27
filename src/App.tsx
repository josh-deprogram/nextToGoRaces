import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {ListItem, ListHeader} from './components';
// import Header from './components/header';
import {convertRaceResultsToArray, fetchRaceData} from './utils';
import {colors} from './config';

export interface IRaceDataDTO {
  [key: string]: IRaceData;
}
export interface IRaceData {
  advertised_start: {seconds: number};
  category_id: string;
  meeting_id: string;
  meeting_name: string;
  race_form: {
    distance: number;
    distance_type: any; // Replace `any` with a more specific type if possible
    distance_type_id: string;
    track_condition: any; // Replace `any` with a more specific type if possible
    track_condition_id: string;
    race_comment: string;
    additional_data: string; // This seems to be a JSON string, consider parsing it into an object
    generated: number;
    silk_base_url: string;
    race_comment_alternative: string;
  };
  race_id: string;
  race_name: string;
  race_number: number;
  venue_country: string;
  venue_id: string;
  venue_name: string;
  venue_state: string;
}

function App(): React.JSX.Element {
  const [raceData, setRaceData] = useState([]);
  const [nextIds, setNextIds] = useState<string[]>([]);
  const [races, setRaces] = useState<IRaceData[]>([]);

  useEffect(() => {
    fetchRaceData({count: 20}).then(response => {
      const data = response.data;
      console.log('race data', data);

      setNextIds(data.next_to_go_ids);
      setRaces(convertRaceResultsToArray(data.race_summaries));
    });
  }, []);

  const renderRaceListItem = ({
    item,
    index,
  }: {
    item: IRaceData;
    index: number;
  }) => {
    return (
      <ListItem
        meeting_name={item.meeting_name}
        race_name={item.race_name}
        race_number={item.race_number}
        start_time={item.advertised_start.seconds}
      />
    );
  };

  const renderListHeader = () => (
    <ListHeader title={'neds : next to go'} sub="Entain - Neds Races Concept" />
  );

  console.log('Races', races);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <FlatList
        data={races}
        renderItem={renderRaceListItem}
        ListHeaderComponent={renderListHeader}
      />
    </SafeAreaView>
  );
}

export default App;
