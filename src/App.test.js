import { render, screen } from '@testing-library/react';
import App from './App';

// This test file works for task 1 and 2
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument();
 expect(linkElement).toHaveTextContent("Hello World");
});
