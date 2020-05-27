import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppProvider } from "./context";

test('renders BENE element', () => {

  const { getByText } = render(
    <AppProvider>
      <App />
    </AppProvider>
  );

  const element = getByText(/BENE/i);
  expect(element).toBeInTheDocument();
});
