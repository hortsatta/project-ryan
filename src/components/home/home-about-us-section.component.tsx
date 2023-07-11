import { memo } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'classix';

import { BaseButtonLink } from '#components/base/base-button-link.component';
import { BaseIcon } from '#components/base/base-icon.component';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'section'> & {
  title: string;
  contentHtml?: string | TrustedHTML;
};

export const HomeAboutUsSection = memo(function ({
  className,
  title,
  contentHtml,
  ...moreProps
}: Props) {
  return (
    <div className='relative'>
      <section
        className={cx('relative mt-[400px] px-4 mx-auto max-w-main', className)}
        {...moreProps}
      >
        <div className='relative flex items-start justify-between z-10'>
          <div className='max-w-[550px] w-full'>
            <h3 className='mb-8'>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: contentHtml as string }} />
            <BaseButtonLink className='mt-6' to='/about' variant='link'>
              <span className='text-default'>Get to Know Us</span>
              <BaseIcon name='arrow-square-right' size={22} />
            </BaseButtonLink>
          </div>
          <div>
            <img src='/images/about-us-rocket.png' alt='about us rocket' />
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <StaticImage src='../../assets/images/glow.png' alt='' />
        </div>
      </section>
    </div>
  );
});
