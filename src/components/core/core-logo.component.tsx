import { memo } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { cx } from 'classix';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & {
  to?: string;
  isHome?: boolean;
};

export const CoreLogo = memo(function ({
  className,
  to = '/',
  isHome,
  ...moreProps
}: Props) {
  return (
    <div className={cx('relative pl-4', className)} {...moreProps}>
      <Link to={to}>
        <div>
          <StaticImage
            src='../../assets/images/logo.svg'
            alt='logo'
            width={130}
            loading='eager'
          />
        </div>
        {isHome && (
          <h1 className='absolute invisible'>
            {process.env.GATSBY_META_TITLE}
          </h1>
        )}
      </Link>
    </div>
  );
});
