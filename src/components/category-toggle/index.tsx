import React, {useState} from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from './styles';

interface IProps {
  type: 'greyhound' | 'harness' | 'thoroughbred';
  active?: boolean;
  onPress?: () => void;
}

export const CategoryToggle = (props: IProps) => {
  const {active, type, onPress} = props;
  const [toggleOn, setToggleOn] = useState(active);

  const onTogglePress = () => {
    onPress && onPress();
    setToggleOn(!toggleOn);
  };

  return (
    <Pressable
      style={({pressed}) => [
        styles.buttonContainer,
        pressed && styles.buttonPressed,
        active || (toggleOn && styles.buttonActive),
      ]}
      onPress={onTogglePress}>
      <View>
        <Text>{type}</Text>
      </View>
    </Pressable>
  );
};

export default CategoryToggle;
