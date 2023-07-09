import { cx } from 'classix';
import type { ComponentProps } from 'react';

export function CoreHeader({ className }: ComponentProps<'div'>) {
  return (
    <header className={cx(className, 'fixed top-0 w-full h-20 z-[9999]')}>
      <nav className='mx-auto px-4 max-w-main h-full'>header</nav>
    </header>
  );
}
