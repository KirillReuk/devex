import React from 'react';

import { GlobalStyles } from '../src/index';

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];