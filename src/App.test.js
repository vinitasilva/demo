import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Create User heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/create user/i);
  expect(headingElement).toBeInTheDocument();
});
