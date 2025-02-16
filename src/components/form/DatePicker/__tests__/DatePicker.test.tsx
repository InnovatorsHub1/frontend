import { render, screen } from '@testing-library/react';
import DatePicker from '../DatePicker';
import userEvent from '@testing-library/user-event';

describe('DatePicker Component', () => {
  test('renders DatePicker with label', () => {
    render(<DatePicker label="Select Date" />);
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
  });

  test('renders DatePicker with default label', () => {
    render(<DatePicker />);
    expect(screen.getByLabelText('Pick a date')).toBeInTheDocument();
  });

  test('applies variant styles correctly', () => {
    render(<DatePicker variant="secondary" />);
    expect(screen.getByLabelText('Pick a date')).toHaveStyle('background-color: #6FCF97');
  });

  test('accepts className prop', () => {
    const { container } = render(<DatePicker className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  test('allows date selection', async () => {
    render(<DatePicker />);
    const input = screen.getByLabelText('Pick a date');
    await userEvent.type(input, '01/01/2025');
    expect(input).toHaveValue('01/01/2025');
  });
});
