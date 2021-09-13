import React from 'react';
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';
import fetchColorService from '../services/fetchColorService';
jest.mock('../services/fetchColorService.js');

test('Renders without errors', () => {
  render(<BubblePage />);
});

test('Renders appropriate number of colors passed in through mock', async () => {
  //Keep in mind that our service is called on mount for this component.
  render(<BubblePage />);
  const allColors = screen.getAllByTestId('color');
  await waitFor(() => {
    expect(allColors).toHaveLength(1);
  });

  fetchColorService.mockResolvedValueOnce({
    color: 'orange',
    code: { hex: '#FFA500' },
    id: 0,
  });
});
