import { memo } from 'react';
import { Link } from 'gatsby';
import { cx } from 'classix';

import type { ComponentProps } from 'react';
import type { NavLink } from '#models/base.model';

const copyright = `© ${new Date().getFullYear()} Company Name. All Rights Reserved.`;

const links: NavLink[] = [
  {
    name: 'terms-of-service',
    to: '/info/terms-of-service',
    label: 'Terms of Service',
  },
  {
    name: 'privacy-policy',
    to: '/info/privacy-policy',
    label: 'Privacy Policy',
  },
];

export const CoreCopyrightDetails = memo(function ({
  className,
  ...moreProps
}: ComponentProps<'div'>) {
  return (
    <div
      className={cx('w-full flex justify-between items-center', className)}
      {...moreProps}
    >
      <span className='inline-block text-sm text-white/70'>{copyright}</span>
      <div>
        <ul className='flex justify-center'>
          {links.map(({ name, to, label }) => (
            <li
              key={name}
              className='after:content-["•"] last:after:content-none text-white/70'
            >
              <Link key={name} to={to} className='px-2 text-sm text-white/70'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});
