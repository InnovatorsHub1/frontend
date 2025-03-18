import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RadioGroup } from '../RadioGroup';

describe('RadioGroup Component', () => {
  const options = [
    { name: 'color', value: 'green' },
    { name: 'color', value: 'blue' },
    { name: 'color', value: 'yellow' },
  ];

  // ✅ 1. Basic rendering test
  it('renders the component without crashing', () => {
    render(<RadioGroup btnOptions={options} />);
    const radioGroupElement = screen.getByTestId('radio-group');
    expect(radioGroupElement).toBeInTheDocument();
  });

  // ✅ 2. Renders the correct number of options
  it('renders the correct number of radio buttons', () => {
    render(<RadioGroup btnOptions={options} />);
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons.length).toBe(options.length);
  });

  // ✅ 3. Applies correct class names for styling
  it('applies correct Tailwind classes', () => {
    render(
      <RadioGroup
        btnOptions={options}
        txtColor='text-blue-200'
        bgColor='bg-black'
        txtSize='text-lg'
        margin='m-5'
        padding='p-6'
        innerPadding='p-6'
      />,
    );

    const radioGroupElement = screen.getByTestId('radio-group');
    expect(radioGroupElement).toHaveClass('bg-black', 'text-blue-200', 'text-lg', 'm-5', 'p-6');
  });

  // ✅ 4. Applies correct inner padding to child elements
  it('applies correct inner padding to options', () => {
    render(<RadioGroup btnOptions={options} innerPadding='p-4' />);

    const optionElements = screen.getAllByText(/green|blue|yellow/);
    optionElements.forEach((option) => {
      expect(option.parentElement).toHaveClass('p-4');
    });
  });

  // ✅ 5. Checks if each radio option renders correctly
  it('renders correct values for each radio button', () => {
    render(<RadioGroup btnOptions={options} />);

    options.forEach(({ value }) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  // ✅ 6. Ensures it handles missing optional props without errors
  it('renders correctly without optional props', () => {
    render(<RadioGroup btnOptions={options} />);
    const radioGroupElement = screen.getByTestId('radio-group');
    expect(radioGroupElement).toBeInTheDocument();
  });

  // ✅ 7. Ensures it handles an empty options array without errors
  it('renders without errors when btnOptions is empty', () => {
    render(<RadioGroup btnOptions={[]} />);
    const radioGroupElement = screen.getByTestId('radio-group');
    expect(radioGroupElement).toBeInTheDocument();
    expect(screen.queryByRole('radio')).not.toBeInTheDocument();
  });
});
