export const sectionMotionAnimation = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { duration: 0.2, ease: 'linear' },
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { margin: '0px 0px -250px 0px' },
};

export const contentMotionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1, ease: 'linear' },
  },
};

const hidden = { pathLength: 0, transition: { duration: 0.1 } };

export const lineMotionVariants = {
  hidden,
  visible: { pathLength: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const pathMotionVariants = {
  hidden,
  visible: {
    pathLength: 1,
    transition: { duration: 0.7, delay: 0.2, ease: 'easeOut' },
  },
};

export const circleMotionVariants = {
  hidden: { scale: 0, transition: { duration: 0.1 } },
  visible: {
    scale: 1,
    transition: { type: 'spring', stiffness: 100, delay: 0.8 },
  },
};
