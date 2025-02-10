import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Link from './Link';


describe('Link Component', () => {
  // Type check
  it("renders Link with type primary", () => {
    render(<Link type='primary'>TEST</Link>)
    const linkElement = screen.getByText(/TEST/i)
    expect(linkElement).toHaveClass("text-primary dark:dark-text-primary")
  });
  it("renders Link with type secondary", () => {
    render(<Link type='secondary'>TEST</Link>)
    const linkElement = screen.getByText(/TEST/i)
    expect(linkElement).toHaveClass("text-secondary dark:dark-text-secondary")
  });  
  it("renders Link with type default", () => {
    render(<Link type='default'>TEST</Link>)
    const linkElement = screen.getByText(/TEST/i)
    expect(linkElement).toHaveClass('text-default dark:dark-text-default')
  })

  // Check navigation
  it("renders Link with to '/home' ", () => {
    const TEST_PATH = "/home"
    render(<Link type='primary' to={TEST_PATH}>TEST</Link>)
    const linkElement = screen.getByText(/TEST/i)
    expect(linkElement).toHaveAttribute("href", TEST_PATH)
  })

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

//   // pnpm run test:ci -> should pass all the tests */}



