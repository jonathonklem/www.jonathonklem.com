import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jonathon Klem Dev Blog`,
    siteUrl: `https://www.jonathonklem.com`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, { 
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "content",
      "path": "./src/content/"
    },
  }, {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      "trackingIds": ["G-7WNDXFKN70"],
    }
  }]
};

export default config;
