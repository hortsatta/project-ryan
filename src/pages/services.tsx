import { useMemo } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { BaseScene } from '#components/base/base-scene.component';
import { BasePageHeading } from '#components/base/base-page-heading.component';

import type { PageProps } from 'gatsby';

type Props = PageProps & {
  data: {
    strapiServicesPage: Queries.Query['strapiServicesPage'];
    allStrapiService: Queries.Query['allStrapiService'];
  };
};

function ServicesPage({
  path,
  data: { strapiServicesPage, allStrapiService },
}: Props) {
  const title = useMemo(
    () => strapiServicesPage?.title || '',
    [strapiServicesPage],
  );

  const contentHtml = useMemo(
    () => strapiServicesPage?.content?.data?.childMarkdownRemark?.html || '',
    [strapiServicesPage],
  );

  const services = useMemo(
    () =>
      allStrapiService.nodes.map(({ slug, title, content, iconImage }) => ({
        id: `#-${slug}`,
        title: title || '',
        contentHtml: content?.data?.childMarkdownRemark?.html || '',
        iconImage:
          !!iconImage?.localFile?.childImageSharp &&
          getImage(iconImage.localFile.childImageSharp as any),
      })),
    [allStrapiService],
  );

  return (
    <BaseScene key={path} book>
      <BasePageHeading>{title}</BasePageHeading>
      <div className='mb-8' dangerouslySetInnerHTML={{ __html: contentHtml }} />
      <div>
        {services.map(({ id, title, iconImage, contentHtml }) => (
          <div
            key={id}
            id={id}
            className='p-8 mb-8 bg-primary-300/20 rounded-2xl last:mb-0'
          >
            <div className='flex items-center gap-4 mb-4'>
              {!!iconImage && <GatsbyImage image={iconImage} alt={title} />}
              <h2 className='text-2xl'>{title}</h2>
            </div>
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        ))}
      </div>
    </BaseScene>
  );
}

export default ServicesPage;

export const query = graphql`
  query ServicesPage {
    strapiServicesPage {
      title
      content {
        data {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allStrapiService(
      filter: { isFeatured: { eq: true } }
      sort: { featureOrder: ASC }
    ) {
      nodes {
        title
        slug
        content {
          data {
            childMarkdownRemark {
              html
            }
          }
        }
        iconImage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 69
                height: 63
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
  }
`;
