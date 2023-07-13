import { memo } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { cx } from 'classix';

import { BaseButtonLink } from '#components/base/base-button-link.component';
import {
  sectionMotionAnimation,
  contentMotionVariants,
  lineMotionVariants as lMotionVariants,
  pathMotionVariants,
  circleMotionVariants,
} from './section-animation.config';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof motion.section> & {
  title: string;
  contentHtml?: string | TrustedHTML;
};

const lineMotionVariants = {
  ...lMotionVariants,
  visible: {
    ...lMotionVariants.visible,
    transition: { duration: 1, delay: 0.1, ease: 'linear' },
  },
};

const LineVisual = memo(function () {
  return (
    <div className='absolute top-0 right-[77px] z-10 w-[122px] h-[1127px]'>
      <div className='absolute top-0 -right-[4px] flex flex-col justify-between h-full'>
        <div className='w-4 h-10 bg-gradient-to-b from-backdrop to-transparent' />
        <div className='w-4 h-10 bg-gradient-to-t from-backdrop to-transparent' />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 122 1127'
        className='overflow-visible'
      >
        <motion.g>
          <motion.line
            className='stroke-accent fill-none'
            x1={118.54}
            x2={118.54}
            y1={0}
            y2={1127}
            fill='none'
            strokeMiterlimit={10}
            strokeWidth={6}
            variants={lineMotionVariants}
          />
          <motion.g>
            <motion.path
              className='stroke-accent fill-none'
              d='M 118.54 0 L 118.54 110.21 C 118.547 127.948 111.52 144.965 99 157.53 L 35.49 221 C 21.328 235.159 13.371 254.364 13.37 274.39 L 13.37 381.59'
              strokeMiterlimit={10}
              strokeWidth={6}
              variants={pathMotionVariants}
            />
            <motion.circle
              className='fill-accent'
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

export const HomeCallToActionSection = memo(function ({
  className,
  title,
  contentHtml,
  ...moreProps
}: Props) {
  return (
    <motion.section
      className={cx(
        'relative px-4 pt-[380px] pb-[400px] mx-auto max-w-main',
        className,
      )}
      {...moreProps}
      {...sectionMotionAnimation}
    >
      <LineVisual />
      <div className='relative mx-auto w-fit z-0'>
        {/* Content */}
        <motion.div
          className='relative flex items-center justify-between p-7 gap-[40px] w-fit bg-accent/30 rounded-2xl z-10
            overflow-hidden drop-shadow-2x1 shadow-[inset_0px_0px_12px_1px_rgba(255,255,255,0.2)]'
          variants={contentMotionVariants}
        >
          <div>
            <StaticImage
              src='../../assets/images/call-to-action-chart.png'
              alt=''
            />
          </div>
          <div className='max-w-[460px] w-full'>
            <h3 className='mb-6'>{title}</h3>
            <div
              className='mb-6'
              dangerouslySetInnerHTML={{ __html: contentHtml as string }}
            />
            <BaseButtonLink to='/connect' variant='primary'>
              Connect With Us
            </BaseButtonLink>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
});
