import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Radio from './Radio';

test('renders radio component with children and handles click event', () => {
  const labelText = 'Option 1';
  render(<Radio>{labelText}</Radio>);
  const radioButton = screen.getByRole('radio');
  const radioLabel = screen.getByRole('radio-label');
  expect(radioLabel).toHaveTextContent(labelText);
  expect(radioButton).not.toBeChecked();
  fireEvent.click(radioButton);
  expect(radioButton).toBeChecked();
});

