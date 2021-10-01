module.exports = {
  pathPrefix: "/adamsalves",
  siteMetadata: {
    title: `Adams Alves`,
    author: {
      name: `@adamsalves`,
      summary: `Desenvolvedor Front-End`,
      bio: 'Trabalho com Desenvolvimento Web e Front-End em projetos que usam Javascript (ES6+) e Vue.js.',
    },
    description: `Adams Alves - Desenvolvimento Web e Front End em São Paulo/SP.`,
    siteUrl: `https://adamsalves.com.br/`,
    social: {
      github: `adamsalves`,
    },
    defaultImage: "images/bg.jpeg",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-62251910-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Adams Alves - Dev. Front-end`,
        short_name: `Adams Alves`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#131313`,
        display: `minimal-ui`,
        icon: `content/assets/a-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-postcss`,
  ],
}
