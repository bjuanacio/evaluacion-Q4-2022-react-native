import { render, fireEvent } from '@testing-library/react-native';
import { GiftContainer } from './gift-container';

describe('Gift Container Suite', () => {
  it('Should render with empty gift list ', () => {
    const { debug,getByText } = render(<GiftContainer />)
    debug();
    const text = getByText("No posee gifts")
    expect(text).toBeTruthy();
  });
});
