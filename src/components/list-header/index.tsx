import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {CategoryToggle} from '..';
import {RACE_CATEGORIES} from '../../config';
import {useSelector} from 'react-redux';
import {selectCategories} from '../../state/categorySlice';

interface IHeader {
  title: string;
  sub: string;
}

export const ListHeader = (props: IHeader) => {
  const {title, sub} = props;
  const categories = useSelector(selectCategories);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subhead}>{sub}</Text>

      <View style={styles.navRow}>
        <CategoryToggle
          categoryName="Greyhound"
          categoryId={RACE_CATEGORIES.greyhound}
          active={categories.includes(RACE_CATEGORIES.greyhound)}
        />
        <CategoryToggle
          categoryName="Thoroughbred"
          categoryId={RACE_CATEGORIES.thoroughbred}
          active={categories.includes(RACE_CATEGORIES.thoroughbred)}
        />
        <CategoryToggle
          categoryName="Harness"
          categoryId={RACE_CATEGORIES.harness}
          active={categories.includes(RACE_CATEGORIES.harness)}
        />
      </View>
    </View>
  );
};

export default ListHeader;
