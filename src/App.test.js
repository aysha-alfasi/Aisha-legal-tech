import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Just Started text', () => {
  render(<App />);
  const reactTextElement = screen.getByText(/Just Started/i);
  expect(reactTextElement).toBeInTheDocument();
});
