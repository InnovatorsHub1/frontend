import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

describe('Sidebar Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );
  });

  test('should render Sidebar component', () => {
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('should open and close sidebar', () => {
    const toggleButton = screen.getByRole('button');
    const navElement = screen.getByRole('navigation');

    // Sidebar should initially be closed
    expect(navElement).toHaveClass('w-4');

    // Click the button to open the sidebar
    fireEvent.click(toggleButton);
    expect(navElement).toHaveClass('w-xl');

    // Click the button again to close the sidebar
    fireEvent.click(toggleButton);
    expect(navElement).toHaveClass('w-4');
  });
});
