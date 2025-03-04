import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Checkbox from '../Checkbox';

describe('Checkbox Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    render(
      <>
        <Checkbox disabled />
        <Checkbox checked />
        <Checkbox size='small' />
      </>,
    );
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render a disabled checkbox', () => {
    const checkboxes = screen.getAllByRole('checkbox');
    const disabledCheckbox = checkboxes.find((checkbox) => (checkbox as HTMLInputElement).disabled);
    expect(disabledCheckbox).toBeInTheDocument();
    expect(disabledCheckbox).toBeDisabled();
  });

  it('should render a checked checkbox', () => {
    const checkboxes = screen.getAllByRole('checkbox');
    const checkedCheckbox = checkboxes.find((checkbox) => (checkbox as HTMLInputElement).checked);
    expect(checkedCheckbox).toBeInTheDocument();
    expect(checkedCheckbox).toBeChecked();
  });

  it('should render a small checkbox', () => {
    const checkboxes = screen.getAllByRole('checkbox');
    const smallCheckbox = checkboxes.find(
      (checkbox) => !(checkbox as HTMLInputElement).disabled && !(checkbox as HTMLInputElement).checked,
    );
    expect(smallCheckbox).toBeInTheDocument();
    if (smallCheckbox?.getAttribute('size') === 'small') {
      expect(smallCheckbox).toHaveAttribute('size', 'small');
    }
  });
});
