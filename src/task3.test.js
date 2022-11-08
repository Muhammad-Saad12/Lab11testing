import { render, screen } from '@testing-library/react';
import Task3 from './task3';

// This test file works for task 3
test('renders learn react link', () => {
  render(<Task3 />);
  const linkElement = screen.getByTestId("task3");
expect(linkElement).toHaveTextContent("1","2","3","4","5","6","7","8","9","10");
});