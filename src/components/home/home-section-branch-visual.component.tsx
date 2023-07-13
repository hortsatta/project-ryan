import { memo } from 'react';
import { motion } from 'framer-motion';
import { cx } from 'classix';

import {
  lineMotionVariants,
  pathMotionVariants,
  circleMotionVariants,
} from './section-animation.config';

import type { ComponentProps } from 'react';

export const HomeSectionBranchVisual = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'div'>) {
  return (
    <div className={cx('w-[122px] h-[395px]', className)} {...moreProps}>
      <div className='absolute top-0 -right-[4px] flex flex-col justify-between h-full pb-[15px]'>
        <div className='w-4 h-10 bg-gradient-to-b from-backdrop to-transparent' />
        <div className='w-4 h-10 bg-gradient-to-t from-backdrop to-transparent' />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 122 395'
        className='overflow-visible'
      >
        <motion.g>
          <motion.line
            className='stroke-secondary fill-none'
            x1={118.54}
            x2={118.54}
            y1={0}
            y2={380}
            fill='none'
            strokeMiterlimit={10}
            strokeWidth={6}
            variants={lineMotionVariants}
          />
          <motion.g>
            <motion.path
              className='stroke-secondary fill-none'
              d='M 118.54 0 L 118.54 110.21 C 118.547 127.948 111.52 144.965 99 157.53 L 35.49 221 C 21.328 235.159 13.371 254.364 13.37 274.39 L 13.37 381.59'
              strokeMiterlimit={10}
              strokeWidth={6}
              variants={pathMotionVariants}
            />
            <motion.circle
              className='fill-secondary'
              cx={13.37}
              cy={381.58}
              r={13.37}
              variants={circleMotionVariants}
            />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
});
