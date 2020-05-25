import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

test('renders MOLTO BENE element', () => {
  const { getByText } = render(<App />);
  const element = getByText(/MOLTO BENE/i);
  expect(element).toBeInTheDocument();
});
