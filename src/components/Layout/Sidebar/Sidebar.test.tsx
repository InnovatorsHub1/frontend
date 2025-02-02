import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import { BrowserRouter } from 'react-router-dom'; // Import Router

describe('Sidebar Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>,
    );
  });

  test('render Sidebar component', () => {
    render(<Sidebar />);
  });

  test('Should open and close side bar', () => {
    // Get the button
    const toggleButton = screen.getByRole('button');

    // Sidebar should initially be closed
    const navElement = screen.getByRole('navigation');
    expect(navElement).toHaveClass('w-4');

    // Click the button to open the sidebar
    fireEvent.click(toggleButton);
    expect(navElement).toHaveClass('w-xl');

    // Click the button again to close the sidebar
    fireEvent.click(toggleButton);
    expect(navElement).toHaveClass('w-4');
  });
});
