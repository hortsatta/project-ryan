import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { AnimatePresence } from 'framer-motion';
import { cx } from 'classix';

import { useStore } from '#hooks/use-store.hook';
import { BaseSiteLogo } from '#components/base/base-site-logo.component';
import { CoreHeader } from './core-header.component';
import { CoreNav } from './core-nav.component';
import { CoreFooter } from './core-footer.component';
import { CoreFooterLinks } from './core-footer-links.component';

import type { PageProps } from 'gatsby';

const query = graphql`
  query CoreLayout {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    strapiMainMenu: strapiMainMenuItemsJsonnode {
      major {
        label
        name
        to: path
      }
      minor {
        label
        name
        to: path
      }
    }
  }
`;

export function CoreLayout({ location, children }: PageProps) {
  const isPageTransitioning = useStore((state) => state.isPageTransitioning);

  const {
    site,
    strapiMainMenu: { major: majorLinks, minor: minorLinks },
  } = useStaticQuery(query);

  const isHome = useMemo(() => location.pathname === '/', [location]);

  return (
    <>
      <CoreHeader>
        <BaseSiteLogo className='pl-4' isHome={isHome} isHeader />
        <CoreNav
          majorLinks={majorLinks}
          minorLinks={minorLinks}
          isHome={isHome}
        />
      </CoreHeader>
      <main className='min-h-screen'>
        <AnimatePresence mode='wait'>{children}</AnimatePresence>
      </main>
      <CoreFooter>
        <CoreFooterLinks links={majorLinks} />
      </CoreFooter>
      {/* Disable controls if page is transitioning */}
      <div
        className={cx(
          'fixed top-0 left-0 w-full h-full cursor-not-allowed z-[99999] hidden',
          isPageTransitioning && '!block',
        )}
      />
    </>
  );
}
