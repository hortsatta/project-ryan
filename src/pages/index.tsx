import { useMemo } from 'react';
import { graphql } from 'gatsby';

import { HomeWelcomeSection } from '#components/home/home-welcome-section.component';
import { HomeOurServicesSection } from '#components/home/home-our-services-section.component';
import { HomeAboutUsSection } from '#components/home/home-about-us-section.component';
import { HomeTechnologiesSection } from '#components/home/home-technologies-section.component';
import { HomeWhyChooseUsSection } from '#components/home/home-why-choose-us-section.component';
import { HomeCallToActionSection } from '#components/home/home-call-to-action-section.component';

import type { HeadFC, PageProps } from 'gatsby';
import type { AccordionItem } from '#models/base.model';

type Props = PageProps & {
  data: {
    strapiHomePage: Queries.Query['strapiHomePage'];
    strapiHomePageWelcome: Queries.Query['strapiHomePageWelcomecontentTextnode'];
    strapiHomePageServices: Queries.Query['strapiHomePageServicescontentTextnode'];
    allStrapiService: Queries.Query['allStrapiService'];
    strapiHomePageAboutUs: Queries.Query['strapiHomePageAboutuscontentTextnode'];
    strapiHomePageTechnologies: Queries.Query['strapiHomePageTechnologiescontentTextnode'];
    strapiHomePageWhyChooseUs: Queries.Query['strapiHomePageWhychooseuscontentTextnode'];
    strapiHomePageCallToAction: Queries.Query['strapiHomePageCalltoactioncontentTextnode'];
  };
};

function IndexPage({
  data: {
    strapiHomePage,
    allStrapiService,
    strapiHomePageWelcome,
    strapiHomePageServices,
    strapiHomePageAboutUs,
    strapiHomePageWhyChooseUs,
    strapiHomePageCallToAction,
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

  const technologiesTitle = useMemo(
    () => strapiHomePageAboutUs?.childMarkdownRemark?.frontmatter?.title || '',
    [strapiHomePageAboutUs],
  );

  const technologiesContentHtml = useMemo(
    () => strapiHomePageAboutUs?.childMarkdownRemark?.html || '',
    [strapiHomePageAboutUs],
  );

  const whyChooseUsTitle = useMemo(
    () =>
      strapiHomePageWhyChooseUs?.childMarkdownRemark?.frontmatter?.title || '',
    [strapiHomePageWhyChooseUs],
  );

  const whyChooseUsContentHtml = useMemo(
    () => strapiHomePageWhyChooseUs?.childMarkdownRemark?.html || '',
    [strapiHomePageWhyChooseUs],
  );

  const whyChooseUsList = useMemo(
    () =>
      strapiHomePage?.whyChooseUsList?.map(({ title, content }: any) => ({
        title,
        content: <p>{content}</p>,
      })) as AccordionItem[],
    [strapiHomePage],
  );

  const callToActionTitle = useMemo(
    () =>
      strapiHomePageCallToAction?.childMarkdownRemark?.frontmatter?.title || '',
    [strapiHomePageCallToAction],
  );

  const callToActionContentHtml = useMemo(
    () => strapiHomePageCallToAction?.childMarkdownRemark?.html || '',
    [strapiHomePageCallToAction],
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
      <HomeTechnologiesSection
        id='technologies'
        title={technologiesTitle}
        contentHtml={technologiesContentHtml}
      />
      <HomeWhyChooseUsSection
        id='why-choose-us'
        whyItems={whyChooseUsList}
        title={whyChooseUsTitle}
        contentHtml={whyChooseUsContentHtml}
      />
      <HomeCallToActionSection
        id='call-to-action'
        title={callToActionTitle}
        contentHtml={callToActionContentHtml}
      />
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  fragment markdownRemark on MarkdownRemark {
    frontmatter {
      title
    }
    html
  }
  query IndexPage {
    strapiHomePage {
      whyChooseUsList {
        title
        content
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
    strapiHomePageWelcome: strapiHomePageWelcomecontentTextnode {
      childMarkdownRemark {
        ...markdownRemark
      }
    }
    strapiHomePageServices: strapiHomePageServicescontentTextnode {
      childMarkdownRemark {
        ...markdownRemark
      }
    }
    strapiHomePageAboutUs: strapiHomePageAboutuscontentTextnode {
      childMarkdownRemark {
        ...markdownRemark
      }
    }
    strapiHomePageTechnologies: strapiHomePageTechnologiescontentTextnode {
      childMarkdownRemark {
        ...markdownRemark
      }
    }
    strapiHomePageWhyChooseUs: strapiHomePageWhychooseuscontentTextnode {
      childMarkdownRemark {
        ...markdownRemark
      }
    }
    strapiHomePageCallToAction: strapiHomePageCalltoactioncontentTextnode {
      childMarkdownRemark {
        ...markdownRemark
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
