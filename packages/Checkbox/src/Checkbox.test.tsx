import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders checkbox component with children and handles click event', () => {
  const labelText = 'Option 1';
  render(<Checkbox>{labelText}</Checkbox>);
  const checkboxButton = screen.getByRole('checkbox');
  const checkboxLabel = screen.getByRole('checkbox-label');
  expect(checkboxLabel).toHaveTextContent(labelText);
  expect(checkboxButton).not.toBeChecked();
  fireEvent.click(checkboxButton);
  expect(checkboxButton).toBeChecked();
});

