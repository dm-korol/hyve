import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it } from '@jest/globals';
import { Preset } from './index';

/**
 * @jest-environment jsdom
 */
describe('Preset component', () => {
  it('should render', () => {
    render(<Preset />);

    const preset = screen.getByTestId('preset');
    expect(preset).toHaveTextContent('Preset');
  });
});
