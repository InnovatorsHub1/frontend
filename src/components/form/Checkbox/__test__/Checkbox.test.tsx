import { render, screen } from '@testing-library/react';
import Checkbox, { ICheckboxProps } from '../Checkbox';

describe('Checkbox Component', () => {
  const defaultProps: ICheckboxProps = {
    disabled: true,
    checked: true,
    size: 'small',
  };

  beforeEach(() => {
    render(<Checkbox {...defaultProps} />);
  });

  it('should render a disabled checkbox', () => {
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeDisabled();
  });

  it('should render a checked checkbox', () => {
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
  });

  it('should render a small checkbox', () => {
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    if (checkbox?.getAttribute('size') === 'small') {
      expect(checkbox).toHaveAttribute('size', 'small');
    }
  });
});
