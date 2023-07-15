import { useMemo } from 'react';
import { graphql } from 'gatsby';

import { BaseScene } from '#components/base/base-scene.component';
import { BasePageHeading } from '#components/base/base-page-heading.component';

import type { PageProps } from 'gatsby';

type Props = PageProps & {
  // data: {
  //   strapiTechnologiesPage: Queries.Query['strapiTechnologiesPage'];
  // };
};

function TechnologiesPage({ path }: Props) {
  // const title = useMemo(() => strapiAboutPage?.title || '', [strapiAboutPage]);

  // const contentHtml = useMemo(
  //   () => strapiAboutPage?.content?.data?.childMarkdownRemark?.html || '',
  //   [strapiAboutPage],
  // );

  return (
    <BaseScene key={path} book>
      <BasePageHeading>Technologies</BasePageHeading>
      {/* <div dangerouslySetInnerHTML={{ __html: contentHtml }} /> */}
    </BaseScene>
  );
}

export default TechnologiesPage;

// export const query = graphql`
//   query TechnologiesPage {
//     strapiTechnologiesPage {
//       title
//       content {
//         data {
//           childMarkdownRemark {
//             html
//           }
//         }
//       }
//     }
//   }
// `;
