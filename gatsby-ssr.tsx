import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel='preload'
      href='/fonts/body-400.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='interFont'
    />,
    <link
      rel='preload'
      href='/fonts/body-500.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='interFont'
    />,
    <link
      rel='preload'
      href='/fonts/body-600.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='interFont'
    />,
    <link
      rel='preload'
      href='/fonts/heading-600.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
      key='interFont'
    />,
  ]);
};
