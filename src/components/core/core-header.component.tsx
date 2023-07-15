import { memo, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { cx } from 'classix';

import type { ComponentProps } from 'react';

const SCROLL_Y_THRESHOLD = 80;

export const CoreHeader = memo(function ({
  className,
  children,
  ...moreProps
}: ComponentProps<'header'>) {
  const { scrollY } = useScroll();
  const [isScrollTop, setIsScrollTop] = useState(true);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrollTop(latest <= SCROLL_Y_THRESHOLD);
  });

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
        {children}
      </div>
    </header>
  );
});
