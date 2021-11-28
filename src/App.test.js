import { render, screen } from '@testing-library/react';
import App from './App';

test('renders playground', () => {
  render(<App />);
  const linkElement = screen.getByText(/playground/i);
  expect(linkElement).toBeInTheDocument();
});
