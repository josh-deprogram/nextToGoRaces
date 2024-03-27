import * as React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useDispatch} from 'react-redux';
import {CategoryToggle} from '../src/components';

import {setCategory, removeCategory} from '../src/state/categorySlice';
import {IToggleProps} from '../src/components/category-toggle';

// Mock useDispatch
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

describe('CategoryToggle', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    // Clear mock and set a mock implementation before each test
    mockDispatch.mockClear();
    useDispatch.mockReturnValue(mockDispatch);
  });

  it('dispatches setCategory action on press when not active', () => {
    const props: IToggleProps = {
      active: false,
      categoryName: 'Greyhound',
      categoryId: 'test-category-id',
    };

    const {getByText} = render(<CategoryToggle {...props} />);

    fireEvent.press(getByText(props.categoryName));

    expect(mockDispatch).toHaveBeenCalledWith(setCategory(props.categoryId));
  });

  it('dispatches removeCategory action on press when active', () => {
    const props: IToggleProps = {
      active: true,
      categoryName: 'Greyhound',
      categoryId: 'test-category-id',
    };

    const {getByText} = render(<CategoryToggle {...props} />);

    fireEvent.press(getByText(props.categoryName));

    expect(mockDispatch).toHaveBeenCalledWith(removeCategory(props.categoryId));
  });
});
