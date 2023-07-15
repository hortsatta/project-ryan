import { useMemo } from 'react';
import { graphql } from 'gatsby';

import { BaseScene } from '#components/base/base-scene.component';
import { BasePageHeading } from '#components/base/base-page-heading.component';

import type { PageProps } from 'gatsby';

type Props = PageProps & {
  data: {
    strapiAboutPage: Queries.Query['strapiAboutPage'];
  };
};

function AboutPage({ path, data: { strapiAboutPage } }: Props) {
  const title = useMemo(() => strapiAboutPage?.title || '', [strapiAboutPage]);

  const contentHtml = useMemo(
    () => strapiAboutPage?.content?.data?.childMarkdownRemark?.html || '',
    [strapiAboutPage],
  );

  return (
    <BaseScene key={path} book>
      <BasePageHeading>{title}</BasePageHeading>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </BaseScene>
  );
}

export default AboutPage;

export const query = graphql`
  query AboutPage {
    strapiAboutPage {
      title
      content {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`;
