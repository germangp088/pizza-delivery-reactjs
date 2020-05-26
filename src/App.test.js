import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders BENE element', () => {
  const { getByText } = render(<App />);

  const element = getByText(/BENE/i);
  expect(element).toBeInTheDocument();
});
