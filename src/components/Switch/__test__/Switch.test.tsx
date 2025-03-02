import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Switch from '../Switch';

describe('Switch Component', () => {
  beforeEach(() => {
    render(<Switch />);
  });

  it('renders Switch', () => {
    const switchElement = screen.getByRole('checkbox');
    expect(switchElement).toBeInTheDocument();
  });
});
