import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {CategoryToggle} from '..';

interface IHeader {
  title: string;
  sub: string;
}
export const ListHeader = (props: IHeader) => {
  const {title, sub} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subhead}>{sub}</Text>

      <View style={styles.navRow}>
        <CategoryToggle type="greyhound" />
        <CategoryToggle type="harness" />
        <CategoryToggle type="thoroughbred" />
      </View>
    </View>
  );
};

export default ListHeader;
