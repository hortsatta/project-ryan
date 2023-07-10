import { memo, useEffect, useMemo, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { cx } from 'classix';

import { useStore } from '#hooks/use-store.hook';
import { BaseNavLink } from '#components/base/base-nav-link.component';

import type { ComponentProps } from 'react';
import type { NavLink } from '#components/base/base-nav-link.component';

type Props = ComponentProps<typeof motion.nav> & {
  majorLinks: NavLink[];
  minorLinks?: NavLink[];
  isHome?: boolean;
};

const transition = { ease: 'easeInOut', duration: 0.3 };

export const CoreNav = memo(function ({
  className,
  majorLinks,
  minorLinks,
  isHome,
  ...moreProps
}: Props) {
  const isBeyondWelcome = useStore((state) => state.isBeyondWelcome);
  const controls = useAnimationControls();
  const minorListRef = useRef<HTMLUListElement>(null);

  const variants = useMemo(() => {
    const { width } = minorListRef.current?.getBoundingClientRect() || {};
    return {
      show: { x: 0 },
      hide: { x: width },
    };
  }, [minorListRef.current]);

  // Show or hide minor links
  useEffect(() => {
    if (!isHome) {
      controls.start('show');
      return;
    }

    controls.start(isBeyondWelcome ? 'show' : 'hide');
  }, [isHome, isBeyondWelcome]);

  return (
    <motion.nav
      className={cx('flex items-center justify-start', className)}
      variants={variants}
      animate={controls}
      transition={transition}
      {...moreProps}
    >
      <ul className='flex items-center'>
        {majorLinks.map(({ label, to, name }) => (
          <li key={name}>
            <BaseNavLink name={name} to={to} label={label} />
          </li>
        ))}
      </ul>
      <ul ref={minorListRef} className='flex items-center'>
        <li>
          <span className='px-3.5 text-primary-100'>|</span>
        </li>
        {minorLinks?.map(({ label, to, name }) => (
          <li key={name}>
            <BaseNavLink
              name={name}
              to={to}
              label={label}
              labelClassName='text-primary-100'
            />
          </li>
        ))}
      </ul>
    </motion.nav>
  );
});
