import { memo } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { cx } from 'classix';

import { BaseButtonLink } from '#components/base/base-button-link.component';
import { BaseIcon } from '#components/base/base-icon.component';
import { HomeSectionBranchVisual } from './home-section-branch-visual.component';
import {
  sectionMotionAnimation,
  contentMotionVariants,
} from './section-animation.config';

import type { ComponentProps } from 'react';

type Props = ComponentProps<typeof motion.section> & {
  title: string;
  contentHtml?: string | TrustedHTML;
};

export const HomeTechnologiesSection = memo(function ({
  className,
  title,
  contentHtml,
  ...moreProps
}: Props) {
  return (
    <motion.section
      className={cx('relative px-4 pt-[400px] mx-auto max-w-main', className)}
      {...moreProps}
      {...sectionMotionAnimation}
    >
      <HomeSectionBranchVisual className='absolute top-0 right-[77px] z-10' />
      <div className='relative z-0'>
        {/* Content */}
        <motion.div
          className='relative flex items-start justify-between z-10'
          variants={contentMotionVariants}
        >
          <div className='mt-9 max-w-[550px] w-full'>
            <h3 className='mb-8'>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: contentHtml as string }} />
            <BaseButtonLink className='mt-6' to='/technologies' variant='link'>
              <span className='text-default'>See Our Process</span>
              <BaseIcon name='arrow-square-right' size={22} />
            </BaseButtonLink>
          </div>
          <div className='relative -mt-5'>
            <StaticImage
              src='../../assets/images/technologies-window.png'
              alt=''
            />
            <div className='absolute top-[106px] translate-x-[143px]'>
              <img
                src='/images/technologies-coffee.png'
                alt='technologies coffee'
              />
            </div>
          </div>
        </motion.div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <StaticImage src='../../assets/images/glow.png' alt='' />
        </div>
      </div>
    </motion.section>
  );
});
