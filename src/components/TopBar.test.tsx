import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TopBar from './TopBar';

describe('TopBar', () => {
  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <TopBar />
      </BrowserRouter>);
  });
});