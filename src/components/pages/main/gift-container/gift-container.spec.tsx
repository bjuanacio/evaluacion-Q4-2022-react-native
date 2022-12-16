import { render, fireEvent } from '@testing-library/react-native';
import { GiftContainer } from './gift-container';

describe('Gift Container Suite', () => {
  xit('Should render with empty gift list ', () => {
    const { getByText } = render(<GiftContainer />)
    const addButton = getByText("ADD")
    expect(addButton).toBeDefined();
  });
});
