import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import DatePicker from '../DatePicker';

describe('DatePicker Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders DatePicker with value', () => {
    render(<DatePicker label='Value check' value={new Date('01/01/2025')} />);
    expect(screen.getByLabelText('Value check')).toHaveValue('01/01/2025');
  });

  it('renders DatePicker with label', () => {
    render(<DatePicker label='Select Date' />);
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
  });

  it('checks form values change when DatePicker values are updated', () => {
    render(
      <form>
        <h2>Hotel Search Engine</h2>
        <input placeholder='Destination' />
        <DatePicker label='Departure' value={new Date('01/01/2025')} />
        <DatePicker label='Return' value={new Date('01/10/2025')} />
      </form>,
    );

    const departurePickerElement = screen.getByLabelText('Departure');
    const returnPickerElement = screen.getByLabelText('Return');

    // Simulate user changing the date
    fireEvent.change(departurePickerElement, { target: { value: '01/05/2025' } });
    fireEvent.change(returnPickerElement, { target: { value: '01/15/2025' } });

    expect(departurePickerElement).toHaveValue('01/05/2025');
    expect(returnPickerElement).toHaveValue('01/15/2025');
  });
});
