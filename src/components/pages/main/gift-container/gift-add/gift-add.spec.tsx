import { render } from '@testing-library/react-native';
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
    const addButton = getByText("Add")
    expect(addButton).toBeDefined();
  });

  it('Should render text field with placeholder  ', () => {
    const { getByTestId } = render(<GiftAdd {...props} />)
    const textInput = getByTestId("gifTextField");
    expect(textInput).toBeDefined();
  });
});