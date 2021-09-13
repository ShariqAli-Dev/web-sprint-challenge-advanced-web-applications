import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

const colors = [
  {
    color: 'orange',
    code: { hex: '#FFA500' },
    id: 0,
  },
  {
    color: 'orange',
    code: { hex: '#FFA500' },
    id: 1,
  },
  {
    color: 'orange',
    code: { hex: '#FFA500' },
    id: 2,
  },
  {
    color: 'orange',
    code: { hex: '#FFA500' },
    id: 3,
  },
];

test('Renders an empty list of colors without errors', () => {
  render(<ColorList colors={[]} />);
});

test('Renders a list of colors without errors', () => {
  render(<ColorList colors={colors} />);
});

test('Renders the EditForm when editing = true and does not render EditForm when editing = false', () => {
  render(<ColorList colors={colors} editing={true} />);
  let menu = screen.queryByTestId('edit_menu');
  expect(menu).not.toBeFalsy();
  expect(menu).not.toBeNull();
  expect(menu).toBeInTheDocument();

  render(<ColorList colors={colors} editing={false} />);
  menu = screen.queryByTestId('edit_menu');
  expect(menu).toBeFalsy();
  expect(menu).toBeNull();
  expect(menu).not.toBeInTheDocument();
});
