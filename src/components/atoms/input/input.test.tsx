import { fireEvent, render } from "@testing-library/react-native";
import { Input } from "./input";

it('should update the value when text is entered', () => {
    const { getByTestId } = render(<Input />);
    const input = getByTestId('input');

    fireEvent.changeText(input, 'example.com');
    expect(input.props.value).toBe('example.com');
});