import { memo } from 'react';
import { Link } from 'gatsby';
import { cx } from 'classix';

import type { GatsbyLinkProps } from 'gatsby';

export type NavLink = {
  name: string;
  to: string;
  label: string;
};

type Props = Omit<GatsbyLinkProps<Record<string, unknown>>, 'ref'> &
  NavLink & {
    labelClassName?: string;
  };

export const BaseNavLink = memo(function ({
  name,
  to,
  label,
  labelClassName,
  ...moreProps
}: Props) {
  return (
    <Link
      className='group relative inline-block'
      activeClassName='active'
      key={name}
      to={to}
      {...moreProps}
    >
      <div className='pl-[7px] pr-[10.5px] absolute top-1/2 -translate-y-1/2 flex justify-between w-full h-[22px] opacity-0 group-hover-[.active]:opacity-100 group-[.active]:opacity-100 transition-opacity'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='white'>
          <polygon points='2,1.7 7.3,1.7 7.3,0 0,0 0,21.8 7.3,21.8 7.3,20.1 2,20.1 ' />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='white'
          className='-scale-100'
        >
          <polygon points='2,1.7 7.3,1.7 7.3,0 0,0 0,21.8 7.3,21.8 7.3,20.1 2,20.1 ' />
        </svg>
      </div>
      <span
        className={cx(
          'px-3.5 uppercase font-medium text-[13px] tracking-[3px] group-[.active]:text-secondary-100 transition-colors',
          labelClassName,
        )}
      >
        {label}
      </span>
    </Link>
  );
});
