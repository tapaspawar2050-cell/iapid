// Importing tools from testing library
// render → shows the component in test environment
// screen → helps us find elements on screen
import { render, screen } from '@testing-library/react';

// Importing App component which we want to test
import App from './App';

// Creating a test
// test(name, function)
// name = what we are checking
test('renders learn react link', () => {

  // render(<App />) means show App component for testing
  render(<App />);

  // screen.getByText() finds text on the page
  // /learn react/i means:
  // search text "learn react"
  // "i" means ignore capital/small letters
  const linkElement = screen.getByText(/learn react/i);

  // expect() checks if something is true
  // toBeInTheDocument() means:
  // check if this text is present on the page
  expect(linkElement).toBeInTheDocument();
});
