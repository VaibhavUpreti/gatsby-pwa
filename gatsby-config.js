module.exports = {
    pathPrefix: "/gatsby-pwa",
	siteMetadata: {
      title: `VaibhavUpreti`,
      name: `Vaibhav Upreti`,
      siteUrl: `https://vaibhavupreti.tech`,
      description: `Blog Website`,
      hero: {
        heading: `Hi, I'm Vaibhav Upreti`,
        maxWidth: 652,
      },
      social: [
        {
          name: `twitter`,
          url: `https://twitter.com/vaibhav__upreti`,
        },
        {
          name: `github`,
          url: `https://github.com/VaibhavUpreti`,
        },
        {
          name: `linkedin`,
          url: `https://www.linkedin.com/in/vaibhav-upreti/`,
        }
      ],
    },
    plugins: [
        {
          resolve: "@narative/gatsby-theme-novela",
          options: {
            contentPosts: "content/posts",
            contentAuthors: "content/authors",
            basePath: "/",
            mailchimp: false,
            authorsPage: true,
            sources: {
              local: true,
            },
          },
        },
    ],
    };
