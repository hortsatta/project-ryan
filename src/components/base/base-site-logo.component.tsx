import { memo, useCallback } from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { cx } from 'classix';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'div'> & {
  to?: string;
  isHome?: boolean;
  isHeader?: boolean;
};

export const BaseSiteLogo = memo(function ({
  className,
  to = '/',
  isHome,
  isHeader,
  ...moreProps
}: Props) {
  const gotoHome = useCallback(() => {
    isHome ? scrollTo('#welcome') : navigate('/');
  }, [isHome]);

  return (
    <div className={cx('relative', className)} {...moreProps}>
      <button onClick={gotoHome}>
        <div>
          {isHeader ? (
            <StaticImage
              src='../../assets/images/logo.svg'
              alt='logo'
              width={130}
              loading='eager'
            />
          ) : (
            <StaticImage
              src='../../assets/images/logo.svg'
              alt='logo'
              width={225}
              loading='eager'
            />
          )}
        </div>
        {isHome && (
          <h1 className='absolute invisible'>
            {process.env.GATSBY_META_TITLE}
          </h1>
        )}
      </button>
    </div>
  );
});
