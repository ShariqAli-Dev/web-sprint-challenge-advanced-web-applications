import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Color from './Color';

test('Renders without errors with blank color passed into component', () => {
  render(<Color color={{ code: { hex: '' }, color: '', id: 0 }} />);
});

test('Renders the color passed into component', async () => {
  render(
    <Color
      color={{
        color: 'orange',
        code: { hex: '#FFA500' },
        id: 0,
      }}
    />
  );

  const orangeColor = screen.getByTestId('color');
  expect(orangeColor).toBeTruthy();
  expect(orangeColor).toBeInTheDocument();
  expect(orangeColor).not.toBeFalsy();
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  render(
    <Color
      color={{
        color: 'orange',
        code: { hex: '#FFA500' },
        id: 0,
      }}
      deleteColor={() => jest.fn()}
      setEditColor={() => jest.fn()}
    />
  );

  const delButton = screen.getByTestId('delete');
  const editButton = screen.getByTestId('color');

  setTimeout(() => userEvent.click(delButton));
  setTimeout(() => userEvent.click(editButton));
});

test('Executes setEditColor and toggleEdit property when color div is clicked', () => {});
