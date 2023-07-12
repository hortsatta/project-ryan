import type { ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'solid' | 'ghost' | 'link';

export type IconName =
  | 'arrow-square-down'
  | 'arrow-square-right'
  | 'minus-square'
  | 'plus-square';

export type NavLink = {
  name: string;
  to: string;
  label: string;
};

export type AccordionItem = {
  title: string;
  content: string | ReactNode;
};
