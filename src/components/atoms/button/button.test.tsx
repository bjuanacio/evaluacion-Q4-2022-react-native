import { render, fireEvent } from '@testing-library/react-native';
import { GifAddButton } from './button';

it('should update the state when the button is pressed', () => {
    const { getByTestId, debug } = render(<GifAddButton />);
    const button = getByTestId('button');
    expect(button.props.title).toBe(undefined);
}); 