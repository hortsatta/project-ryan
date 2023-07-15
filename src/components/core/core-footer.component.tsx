import { memo } from 'react';
import { cx } from 'classix';

import { CoreCopyrightDetails } from './core-copyright-details.component';

import type { ComponentProps } from 'react';

export const CoreFooter = memo(function ({
  className,
  children,
  ...moreProps
}: ComponentProps<'footer'>) {
  return (
    <footer
      className={cx(
        'relative flex justify-center items-end min-h-[607px] bg-gradient-to-t from-backdrop from-50% to-transparent z-10',
        className,
      )}
      {...moreProps}
    >
      <div className='flex flex-col items-center justify-between relative mx-auto min-h-[330px] max-w-main w-full z-10'>
        {children}
        <CoreCopyrightDetails className='pb-6' />
      </div>
      {/* Background */}
      <div className='absolute bottom-0 left-0 w-full h-full bg-[url(/images/bg-planet.png)] bg-top bg-no-repeat bg-cover' />
    </footer>
  );
});
