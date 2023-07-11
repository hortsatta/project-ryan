import { useMemo } from 'react';
import { graphql } from 'gatsby';

import { HomeWelcomeSection } from '#components/home/home-welcome-section.component';
import { HomeOurServicesSection } from '#components/home/home-our-services-section.component';
import { HomeAboutUsSection } from '#components/home/home-about-us-section.component';

import type { HeadFC, PageProps } from 'gatsby';

type Props = PageProps & {
  data: {
    strapiHomePageWelcome: Queries.Query['strapiHomePageWelcomecontentTextnode'];
    strapiHomePageServices: Queries.Query['strapiHomePageServicescontentTextnode'];
    allStrapiService: Queries.Query['allStrapiService'];
    strapiHomePageAboutUs: Queries.Query['strapiHomePageAboutuscontentTextnode'];
  };
};

function IndexPage({
  data: {
    strapiHomePageWelcome,
    strapiHomePageServices,
    allStrapiService,
    strapiHomePageAboutUs,
  },
}: Props) {
  const welcomeTitle = useMemo(
    () => strapiHomePageWelcome?.childMarkdownRemark?.frontmatter?.title || '',
    [strapiHomePageWelcome],
  );

  const welcomeContentHtml = useMemo(
    () => strapiHomePageWelcome?.childMarkdownRemark?.html || '',
    [strapiHomePageWelcome],
  );

  const servicesTitle = useMemo(
    () => strapiHomePageServices?.childMarkdownRemark?.frontmatter?.title || '',
    [strapiHomePageServices],
  );

  const servicesContentHtml = useMemo(
    () => strapiHomePageServices?.childMarkdownRemark?.html || '',
    [strapiHomePageServices],
  );

  const featuredServices = useMemo(
    () =>
      allStrapiService.nodes.map(({ iconImage, ...moreNode }) => ({
        ...moreNode,
        iconImage: iconImage?.localFile?.childImageSharp,
      })),
    [allStrapiService],
  );

  const aboutUsTitle = useMemo(
    () => strapiHomePageAboutUs?.childMarkdownRemark?.frontmatter?.title || '',
    [strapiHomePageAboutUs],
  );

  const aboutUsContentHtml = useMemo(
    () => strapiHomePageAboutUs?.childMarkdownRemark?.html || '',
    [strapiHomePageAboutUs],
  );

  return (
    <div className='pb-16'>
      <HomeWelcomeSection
        id='welcome'
        title={welcomeTitle}
        contentHtml={welcomeContentHtml}
      />
      <HomeOurServicesSection
        id='our-services'
        services={featuredServices}
        title={servicesTitle}
        contentHtml={servicesContentHtml}
      />
      <HomeAboutUsSection
        id='about-us'
        title={aboutUsTitle}
        contentHtml={aboutUsContentHtml}
      />
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  query IndexPage {
    strapiHomePageWelcome: strapiHomePageWelcomecontentTextnode {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
    strapiHomePageServices: strapiHomePageServicescontentTextnode {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
    allStrapiService(
      filter: { isFeatured: { eq: true } }
      sort: { featureOrder: ASC }
    ) {
      nodes {
        slug
        title
        excerpt
        iconImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                height: 89
                width: 99
                quality: 100
                placeholder: NONE
                layout: FIXED
                transformOptions: { fit: INSIDE }
              )
            }
          }
        }
      }
    }
    strapiHomePageAboutUs: strapiHomePageAboutuscontentTextnode {
      childMarkdownRemark {
        frontmatter {
          title
        }
        html
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
