import { useMemo } from 'react';
import { graphql } from 'gatsby';

import { WelcomeSection } from '#components/home/welcome-section.component';

import type { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';

type Props = PageProps & {
  data: { strapiHomePage: Queries.Query['strapiHomePage'] };
};

const IndexPage: FC<Props> = ({ data: { strapiHomePage } }: Props) => {
  const title = useMemo(
    () =>
      strapiHomePage?.welcomeContent?.data?.childMarkdownRemark?.frontmatter
        ?.title || '',
    [strapiHomePage],
  );

  const contentHtml = useMemo(
    () => strapiHomePage?.welcomeContent?.data?.childMarkdownRemark?.html || '',
    [strapiHomePage],
  );

  return (
    <div>
      <WelcomeSection id='section-welcome' title={title} contentHtml={contentHtml} />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPage {
    strapiHomePage {
      welcomeContent {
        data {
          childMarkdownRemark {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
