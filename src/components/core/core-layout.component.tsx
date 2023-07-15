import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { CoreHeader } from './core-header.component';
import { CoreLogo } from './core-logo.component';
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
  const {
    site,
    strapiMainMenu: { major: majorLinks, minor: minorLinks },
  } = useStaticQuery(query);

  const isHome = useMemo(() => location.pathname === '/', [location]);

  return (
    <>
      <CoreHeader>
        <CoreLogo isHome={isHome} />
        <CoreNav
          majorLinks={majorLinks}
          minorLinks={minorLinks}
          isHome={isHome}
        />
      </CoreHeader>
      <main className='min-h-screen'>{children}</main>
      <CoreFooter>
        <CoreFooterLinks links={majorLinks} />
      </CoreFooter>
    </>
  );
}
