import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Switch from '../Switch';

describe('Switch Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
        <Switch/>
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

    it('renders Switch', () => {
        const switchElement = screen.getByRole('checkbox');
        expect(switchElement).toBeInTheDocument();
    });
});
