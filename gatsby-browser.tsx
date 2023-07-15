import React from 'react';
import { AnimatePresence } from 'framer-motion';
import('preline');

import { CoreLayout } from './src/components/core/core-layout.component';

import './src/styles/global.css';

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return (
    <AnimatePresence mode='wait'>
      <CoreLayout {...props}>{element}</CoreLayout>
    </AnimatePresence>
  );
}

// wait until page exit animation has completed before updating scroll position
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  // transition duration from `layout.js` * 1000 to get time in ms
  const TRANSITION_DELAY = 0.3 * 1000 * 2;

  // if it's a "normal" route
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
  }

  // if we used the browser's forwards or back button
  else {
    const savedPosition = getSavedScrollPosition(location) || [0, 0];
    window.setTimeout(
      () => window.scrollTo(...savedPosition),
      TRANSITION_DELAY,
    );
  }

  return false;
};
