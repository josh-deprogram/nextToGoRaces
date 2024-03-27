import React from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {removeCategory, setCategory} from '../../state/categorySlice';
import {colors} from '../../config';

interface IProps {
  categoryName: 'Greyhound' | 'Harness' | 'Thoroughbred';
  categoryId: string;
  active?: boolean;
  onPress?: () => void;
}

export const CategoryToggle = (props: IProps) => {
  const {active, categoryName, categoryId} = props;
  const dispatch = useDispatch();

  const onTogglePress = () => {
    if (!active) {
      dispatch(setCategory(categoryId));
    } else {
      dispatch(removeCategory(categoryId));
    }
  };

  return (
    <Pressable
      //@ts-ignore
      style={({pressed}) => [
        styles.buttonContainer,
        pressed && styles.buttonPressed,
        active && styles.buttonActive,
      ]}
      onPress={onTogglePress}>
      <View>
        <Text style={{color: active ? colors.light : colors.dark}}>
          {categoryName}
        </Text>
      </View>
    </Pressable>
  );
};

export default CategoryToggle;
