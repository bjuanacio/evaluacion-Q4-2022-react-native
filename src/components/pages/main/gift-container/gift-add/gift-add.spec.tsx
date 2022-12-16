import { render, fireEvent } from '@testing-library/react-native';
import { GiftAdd } from './gift-add';

describe('GiftAdd Suite', () => {
  const props = {
    onAdd: jest.fn(),
    giftUrl: 'Gift url placeholder',
    gift: 'https://media.tenor.com/ASs_x_mykqUAAAAM/avengers-marvel-cinematic-universe.gif',
    setGift: jest.fn(),
  }
  it('Should render add button ', () => {
    const { getByText } = render(<GiftAdd {...props} />)
    const addButton = getByText("ADD")
    expect(addButton).toBeDefined();
  });

  it('Should render text field with placeholder  ', () => {
    const { debug, getByText } = render(<GiftAdd {...props} />)
    debug();
    const textInput = getByText("Gift url placeholder")
    expect(textInput).toBeDefined();
  });
});