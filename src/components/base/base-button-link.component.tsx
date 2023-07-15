import { forwardRef, memo } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'classix';

import type { ComponentProps } from 'react';
import type { ButtonVariant } from '#models/base.model';

type Props = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export const BaseButtonLink = memo(
  forwardRef<HTMLAnchorElement, Props>(function (
    { className, variant, children, ...moreProps }: Props,
    ref,
  ) {
    if (variant === 'primary') {
      return (
        <Link
          ref={ref as any}
          className={cx(
            className,
            'flex items-center h-[69px] uppercase drop-shadow-[0_12px_20px_rgba(0,132,255,0.4)] hover:no-underline\
              hover:brightness-110 hover:drop-shadow-[0_12px_20px_rgba(0,132,255,0.6)] transition-all',
          )}
          {...moreProps}
        >
          <StaticImage
            imgClassName='!transition-none'
            src='../../assets/images/btn-primary-left.png'
            alt=''
            placeholder='none'
            loading='eager'
          />
          <div className='relative px-5 h-full flex justify-center items-center bg-gradient-to-r from-primary to-primary-200'>
            <div className='relative text-default tracking-[3.5px] z-10'>
              {children}
            </div>
            <div className='absolute top-0 left-0 w-full h-full'>
              <StaticImage
                className='w-full h-full'
                src='../../assets/images/btn-primary-glow.png'
                alt=''
                objectFit='fill'
                loading='eager'
              />
            </div>
          </div>
          <StaticImage
            imgClassName='!transition-none'
            src='../../assets/images/btn-primary-right.png'
            alt=''
            loading='eager'
          />
        </Link>
      );
    }

    return (
      <Link
        ref={ref as any}
        className={cx(
          'py-3 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent uppercase text-default\
            hover:no-underline tracking-[3.5px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all',
          (!variant || variant === 'solid') &&
            'bg-primary hover:bg-blue-500 dark:focus:ring-offset-gray-800',
          variant === 'ghost' && 'hover:bg-primary',
          variant === 'link' && '!px-0 hover:!px-6 hover:bg-primary',
          className,
        )}
        {...moreProps}
      >
        {children}
      </Link>
    );
  }),
);
