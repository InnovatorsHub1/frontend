import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Link from './Link';


describe('Sidebar Component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Link />
      </BrowserRouter>,
    );
  });
// describe('Link Component', () => {
//   // beforeEach
//   // afterEach

//   // 1 - if the user send prop type=primary check if there is class text-primary
//   // 2 - if the user send prop to and click on the button make sure it navigate to the right place
//   test('should fit className by the provided type primary', () => {
//     // TODO - add
//   });

//   test('should naviate to the right place', () => {
//     // TODO - add
//   });

//   // pnpm run test:ci -> should pass all the tests
});


