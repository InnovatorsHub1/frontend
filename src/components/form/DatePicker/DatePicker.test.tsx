import { render, screen } from '@testing-library/react';
import DatePicker from './DatePicker';

describe('DatePicker Component', () => {
  test('renders DatePicker with label', () => {
    render(<DatePicker label="Select Date" />);
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
  });
});