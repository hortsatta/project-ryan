import { graphql, useStaticQuery } from 'gatsby';

import { CoreHeader } from './core-header.component';
import { CoreNav } from './core-nav.component';

import type { PageProps } from 'gatsby';
import { useMemo } from 'react';

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
        <CoreNav
          majorLinks={majorLinks}
          minorLinks={minorLinks}
          isHome={isHome}
        />
      </CoreHeader>
      {/* <CoreHeader siteTitle={siteTitle} modules={modules} /> */}
      <main>{children}</main>
    </>
  );
}
