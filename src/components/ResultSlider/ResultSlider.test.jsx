import * as React from 'react';
import { render, screen } from '@testing-library/react';

import {ResultSlider} from '../ResultSlider';

describe('ResultSlider', () => {
  it('renders ResultSlider component', () => {
    render(<ResultSlider />);

    screen.debug();
  });
});