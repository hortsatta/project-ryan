import { graphql, useStaticQuery } from 'gatsby';
import type { ComponentProps } from 'react';

const query = graphql`
  query SiteDataQuery {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
  }
`;

export function CoreLayout({ children }: ComponentProps<'main'>) {
  const { siteUrl, title } = useStaticQuery(query);

  return (
    <>
      {/* <CoreHeader siteTitle={siteTitle} modules={modules} /> */}
      <main>{children}</main>
    </>
  );
}
