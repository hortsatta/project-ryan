import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: [],
  singleTypes: ['home-page'],
  remoteFileHeaders: {
    /**
     * Customized request headers
     * For http request with a image or other files need authorization
     * For expamle: Fetch a CDN file which has a security config when gatsby building needs
     */
    Referer: process.env.SITE_URL,
    // Authorization: "Bearer eyJhabcdefg_replace_it_with_your_own_token",
  },
};

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_META_SITE_URL,
    title: process.env.GATSBY_META_TITLE,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          quality: 100,
          formats: ['auto', 'avif'],
          placeholder: 'none',
        },
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-strapi',
      options: strapiConfig,
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '#components': 'src/components',
          '#images': 'src/images',
          // '@hooks': 'src/hooks',
          // '@pages': 'src/pages',
          // '@styles': 'src/styles',
          // '@templates': 'src/templates',
        },
        extensions: ['ts', 'tsx'],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-postcss',
  ],
};

export default config;
