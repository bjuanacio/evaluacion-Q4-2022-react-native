import {render, screen, fireEvent} from '@testing-library/react-native';
import Home from './home';

describe('Documentation Component', () => {
  it('Should render the title"', () => {
    render(<Home />);
    const title = screen.getByText('Gift Gallery');
    expect(title).toBeDefined();
  });
});
