import { cx } from 'classix';
import { motion } from 'framer-motion';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof motion.div> & {
  book?: boolean;
};

const animation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 100,
  },
  transition: {
    type: 'spring',
    mass: 0.35,
    stiffness: 75,
    duration: 0.3,
  },
};

export function BaseScene({ className, book, children, ...moreProps }: Props) {
  return (
    <motion.div
      className={cx(
        'px-4 pt-[112px] mx-auto',
        book ? 'book' : 'max-w-main',
        className,
      )}
      {...animation}
      {...moreProps}
    >
      {children}
    </motion.div>
  );
}
