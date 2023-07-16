import { memo } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'classix';

import { BaseSiteLogo } from '#components/base/base-site-logo.component';

import type { ComponentProps } from 'react';
import type { NavLink } from '#models/base.model';

type Props = ComponentProps<'div'> & {
  links: NavLink[];
  homeTo?: string;
};

export const CoreFooterLinks = memo(function ({
  className,
  links,
  homeTo = '/',
  ...moreProps
}: Props) {
  return (
    <div
      className={cx(
        'w-full flex flex-col justify-between items-center',
        className,
      )}
      {...moreProps}
    >
      <BaseSiteLogo className='pb-6' />
      <div className='pb-8 flex items-center'>
        <ul className='flex'>
          {links.map(({ label, to, name }) => (
            <li key={name}>
              <Link to={to} className='px-2 text-base tracking-widest'>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center gap-4'>
        <a
          href='https://facebook.com'
          target='_blank'
          className='brightness-125 hover:!brightness-200 transition-[filter]'
        >
          <StaticImage
            src='../../assets/images/social-facebook.png'
            alt='facebook'
          />
        </a>
        <a
          href='https://messenger.com'
          target='_blank'
          className='brightness-125 hover:!brightness-200 transition-[filter]'
        >
          <StaticImage
            src='../../assets/images/social-messenger.png'
            alt='messenger'
          />
        </a>
      </div>
    </div>
  );
});
