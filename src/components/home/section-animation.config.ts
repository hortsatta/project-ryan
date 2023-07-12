export const sectionMotionAnimation = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  transition: { duration: 0.2, ease: 'linear' },
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { margin: '0px 0px -200px 0px' },
};

export const contentMotionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.1, ease: 'linear' },
  },
};
