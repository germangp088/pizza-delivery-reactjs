import React from 'react';
import App from './App';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AppProvider } from "./context";

test('render elements', () => {

  const { getByText } = render(
    <AppProvider>
      <App />
    </AppProvider>
  );

  const element = getByText(/BENE/i);
  const bene = getByText(/BENE/i);
  expect(element).toBeInTheDocument();
  expect(bene).toBeInTheDocument();
});