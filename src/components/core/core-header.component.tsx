import { memo, useCallback, useEffect, useState } from 'react';
import { cx } from 'classix';

import { useStore } from '#hooks/use-store.hook';

import type { ComponentProps } from 'react';

const SCROLL_Y_THRESHOLD = 80;

export const CoreHeader = memo(function ({
  className,
  children,
  ...moreProps
}: ComponentProps<'header'>) {
  const scrollY = useStore((state) => state.scrollY);
  const setScrollY = useStore((state) => state.setScrollY);
  const [isScrollTop, setIsScrollTop] = useState(true);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Add event listener to scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrollTop(scrollY <= SCROLL_Y_THRESHOLD);
  }, [scrollY]);

  return (
    <header
      className={cx(
        'fixed top-0 w-full h-20 z-[9999] border-b border-transparent transition-all',
        !isScrollTop &&
          'bg-accent/20 border-b !border-accent/50 backdrop-blur-xl',
        className,
      )}
      {...moreProps}
    >
      <div className='mx-auto flex items-center justify-between max-w-main h-full overflow-hidden'>
        <div />
        {children}
      </div>
    </header>
  );
});
