import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from './styles';
import {ITimeToStart} from '../../types';
import {colors} from '../../config';

interface IProps {
  meeting_name: string;
  race_number: number;
  race_name: string;
  timeToStart: ITimeToStart;
  start_time?: number;
  onPress?: () => void;
}

export const LIST_ITEM_HEIGHT = 60;

export const ListItem = (props: IProps) => {
  const {timeToStart} = props;

  const onPress = () => {
    props.onPress && props.onPress();
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.buttonContainer,
        pressed && styles.buttonPressed,
      ]}
      testID="listitem-test-id"
      onPress={onPress}>
      <View>
        <View style={styles.nameRow}>
          <Text style={styles.raceNumber}>Race {props.race_number} - </Text>
          <Text style={styles.meetingName}>{props.meeting_name}</Text>
        </View>
        <Text style={styles.raceName}>{props.race_name}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>
          {timeToStart.minutes > 0 ? `${timeToStart.minutes}min` : ''}{' '}
          <Text
            style={{
              color: timeToStart.seconds < 0 ? 'red' : colors.primary,
            }}>{`${timeToStart.seconds}sec`}</Text>
        </Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
