import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ListItem} from '../src/components/list-item';

describe('ListItem Component', () => {
  it('renders race information correctly', () => {
    const mockProps = {
      race_number: 1,
      meeting_name: 'Meeting Name',
      race_name: 'Race Name 1',
      timeToStart: {minutes: 10, seconds: 30},
    };

    const {getByText} = render(<ListItem {...mockProps} />);

    expect(getByText(`Race ${mockProps.race_number} - `)).toBeTruthy();
    expect(getByText(mockProps.meeting_name)).toBeTruthy();
    expect(getByText(mockProps.race_name)).toBeTruthy();
    expect(
      getByText(
        `${mockProps.timeToStart.minutes}min ${mockProps.timeToStart.seconds}sec`,
      ),
    ).toBeTruthy();
  });

  it('changes color for seconds when time is below zero', () => {
    const mockProps = {
      race_number: 2,
      meeting_name: 'Meeting Name',
      race_name: 'Race Name 2',
      timeToStart: {minutes: 0, seconds: -10},
    };

    const {getByText} = render(<ListItem {...mockProps} />);
    const negativeSeconds = getByText(`${mockProps.timeToStart.seconds}sec`);

    expect(negativeSeconds.props.style.color).toBe('red');
  });

  it('calls onPress prop when pressed', () => {
    const onPressMock = jest.fn();
    const mockProps = {
      race_number: 3,
      meeting_name: 'Meeting Name',
      race_name: 'Race Name 3',
      onPress: onPressMock,
      timeToStart: {minutes: 0, seconds: 10},
    };

    const {getByTestId} = render(<ListItem {...mockProps} />);

    fireEvent.press(getByTestId('listitem-test-id'));

    expect(onPressMock).toHaveBeenCalled();
  });
});
