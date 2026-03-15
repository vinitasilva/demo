import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Create User heading', () => {
  render(<App />);
  const headingElement = screen.getByRole('heading', { name: /create user/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders Create User button', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /create user/i });
  expect(buttonElement).toBeInTheDocument();
});
