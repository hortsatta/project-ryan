import React from 'react';
import('preline');

import { CoreLayout } from './src/components/core/core-layout.component';

import './src/styles/global.css';

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <CoreLayout {...props}>{element}</CoreLayout>;
};
