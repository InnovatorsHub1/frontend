import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DatePicker from '../DatePicker';

describe('DatePicker Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <>
        <DatePicker label='Value check' value={new Date('01/01/2025')} />
        <DatePicker label='Select Date' />
        <DatePicker label='Variant check' variant='secondary' />
      </>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders DatePicker with value', () => {
    expect(screen.getByLabelText('Value check')).toHaveValue('01/01/2025');
  });

  it('renders DatePicker with label', () => {
    expect(screen.getByLabelText('Select Date')).toBeInTheDocument();
  });

  it('applies variant styles correctly', () => {
    expect(screen.getByLabelText('Variant check')).toHaveStyle({
      backgroundColor: expect.stringMatching(/(#6FCF97|rgb\(111,\s*207,\s*151\))/i),
    });
  });
});
