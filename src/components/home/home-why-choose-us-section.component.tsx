import { memo, useMemo } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { cx } from 'classix';

import { BaseAccordion } from '#components/base/base-accordion.component';
import { HomeSectionBranchVisual } from './home-section-branch-visual.component';
import {
  sectionMotionAnimation,
  contentMotionVariants,
} from './section-animation.config';

import type { ComponentProps } from 'react';
import type { AccordionItem } from '#models/base.model';

type Props = ComponentProps<typeof motion.section> & {
  whyItems: AccordionItem[];
  title: string;
  contentHtml?: string | TrustedHTML;
};

export const HomeWhyChooseUsSection = memo(function ({
  className,
  whyItems,
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
            <div>
              <div
                className='mb-6'
                dangerouslySetInnerHTML={{ __html: contentHtml as string }}
              />
              <div className='relative'>
                <BaseAccordion className='absolute' items={whyItems} />
              </div>
            </div>
          </div>
          <div className='relative -mt-5'>
            <StaticImage
              src='../../assets/images/why-choose-us-window.png'
              alt=''
            />
            <div className='absolute top-[80px] translate-x-[43px]'>
              <img
                src='/images/why-choose-us-star.png'
                alt='why choose us star'
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
