import { memo } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { cx } from 'classix';

import { BaseButtonLink } from '#components/base/base-button-link.component';
import { BaseIcon } from '#components/base/base-icon.component';
import { ServiceCard } from '#components/service/service-card.component';
import {
  sectionMotionAnimation,
  contentMotionVariants as cMotionVariants,
} from './section-animation.config';

import type { ComponentProps } from 'react';
import type { Service } from '#models/service.model';

type Props = ComponentProps<typeof motion.section> & {
  services: Service[];
  title: string;
  contentHtml?: string | TrustedHTML;
};

const contentMotionVariants = {
  ...cMotionVariants,
  visible: {
    ...cMotionVariants.visible,
    transition: { duration: 0.3, delay: 0.1, ease: 'linear' },
  },
};

const lineMotionVariants = {
  hidden: { pathLength: 0, transition: { duration: 0.1 } },
  visible: { pathLength: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const LineVisual = memo(function () {
  return (
    <div className='absolute top-0 right-[72px] flex justify-center w-4 h-[212px]'>
      <div className='absolute top-0 flex flex-col justify-between w-full h-full'>
        <div className='w-4 h-10 bg-gradient-to-b from-backdrop to-transparent' />
        <div className='w-4 h-10 bg-gradient-to-t from-backdrop to-transparent' />
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 6 212'
        className='overflow-visible'
      >
        <motion.line
          className='stroke-secondary fill-none'
          x1={3}
          x2={3}
          y1={0}
          y2={212}
          fill='none'
          strokeMiterlimit={10}
          strokeWidth={6}
          variants={lineMotionVariants}
        />
      </svg>
    </div>
  );
});

export const HomeOurServicesSection = memo(function ({
  className,
  services,
  title,
  contentHtml,
  ...moreProps
}: Props) {
  return (
    <motion.section
      className={cx('relative pt-[212px] px-4 mx-auto max-w-main', className)}
      {...moreProps}
      {...sectionMotionAnimation}
    >
      <LineVisual />
      <motion.div
        className='rounded-2xl overflow-hidden drop-shadow-2xl shadow-[inset_0px_0px_12px_1px_rgba(255,255,255,0.2)]'
        variants={contentMotionVariants}
      >
        {/* Services */}
        <div className='flex justify-center items-start px-5 bg-primary-300/30'>
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              className='before:content-[""] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:w-px 
                  before:h-[calc(100%-40px)] before:border-r before:border-[#0054a8] last:before:border-transparent'
              service={service}
            />
          ))}
        </div>
        {/* Header */}
        <div className='relative pt-9 pb-6 bg-accent/30'>
          <div className='relative flex flex-col justify-start items-center mx-auto max-w-[750px] w-full z-10'>
            <h3 className='mb-4 text-center'>{title}</h3>
            <div
              className='text-center'
              dangerouslySetInnerHTML={{ __html: contentHtml as string }}
            />
            <BaseButtonLink className='mt-2' to='/services' variant='ghost'>
              <span className='text-default'>Explore Further</span>
              <BaseIcon name='arrow-square-right' size={22} />
            </BaseButtonLink>
          </div>
          <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
            <StaticImage src='../../assets/images/services-glow.png' alt='' />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
});
