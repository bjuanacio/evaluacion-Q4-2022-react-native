import { render, screen, fireEvent } from '@testing-library/react-native';
import { Linking } from 'react-native';
import Documentation from './main';
import { primary, background } from '../../../utils/theme/theme';
import DeleteIcon from '../../../assets/delete-icon.png';
import WarningIcon from '../../../assets/warning-icon.png';

describe('Documentation Component', () => {
  it('Should render the title"', () => {
    render(<Documentation />);
    const title = screen.getByText('Gif Galery');
    expect(title).toBeDefined();
  });

});
