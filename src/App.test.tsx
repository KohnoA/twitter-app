import { render, screen } from '@testing-library/react';

import App from './App';

describe('Test', () => {
  it('', () => {
    render(<App />);

    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
