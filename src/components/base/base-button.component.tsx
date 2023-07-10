import { memo } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'classix';

import type { ComponentProps } from 'react';

export type Variants = 'primary' | 'solid' | 'ghost';

type Props = ComponentProps<'button'> & {
  variant?: Variants;
};

export const BaseButton = memo(function ({
  className,
  variant,
  children,
  ...moreProps
}: Props) {
  if (variant === 'primary') {
    return (
      <button
        className={cx(
          className,
          'flex items-center h-[69px] uppercase drop-shadow-[0_12px_20px_rgba(0,132,255,0.4)] hover:brightness-110\
            hover:drop-shadow-[0_12px_20px_rgba(0,132,255,0.6)] transition-all',
        )}
        {...moreProps}
      >
        <StaticImage
          src='../../assets/images/btn-primary-left.png'
          alt=''
          placeholder='none'
        />
        <div className='relative px-5 h-full flex justify-center items-center bg-gradient-to-r from-primary to-accent'>
          <div className='relative text-default tracking-[3.5px] z-10'>
            {children}
          </div>
          <div className='absolute top-0 left-0 w-full h-full'>
            <StaticImage
              className='w-full h-full'
              src='../../assets/images/btn-primary-glow.png'
              alt=''
              objectFit='fill'
            />
          </div>
        </div>
        <StaticImage src='../../assets/images/btn-primary-right.png' alt='' />
      </button>
    );
  }

  return (
    <button
      className={cx(
        'py-3 px-6 inline-flex justify-center items-center gap-2 rounded-md border border-transparent uppercase text-default\
          tracking-[3.5px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all',
        (!variant || variant === 'solid') &&
          'bg-primary hover:bg-blue-500 dark:focus:ring-offset-gray-800',
        variant === 'ghost' && 'hover:bg-primary',
        className,
      )}
      {...moreProps}
    >
      {children}
    </button>
  );
});
