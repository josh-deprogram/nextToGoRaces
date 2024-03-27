import React, {useEffect, useState} from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from './styles';

interface IProps {
  meeting_name: string;
  race_number: number;
  race_name: string;
  start_time: number;
  active?: boolean;
  onPress?: () => void;
}

export const LIST_ITEM_HEIGHT = 60;

export const ListItem = (props: IProps) => {
  const {start_time} = props;
  const [count, setCount] = useState('');
  const date = new Date(start_time * 1000);

  const onPress = () => {
    props.onPress && props.onPress();
  };

  // const formatTime = () => {
  //   // return `${getTimeRemaining(date).minutes}m ${
  //   //   getTimeRemaining(date).seconds
  //   // }s `;
  // };

  // /* Hide if 1 min past the start time */
  // if (getTimeRemaining(date).minutes <= -1) {
  //   return null;
  // }

  return (
    <Pressable
      style={({pressed}) => [
        styles.buttonContainer,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}>
      <View>
        <View style={styles.nameRow}>
          <Text style={styles.raceNumber}>Race {props.race_number} - </Text>
          <Text style={styles.meetingName}>{props.meeting_name}</Text>
        </View>
        <Text style={styles.raceName}>{props.race_name}</Text>
      </View>
      <View>
        <Text style={styles.time}>{count}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
