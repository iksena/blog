module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-blog',
      options: {}
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-plugin-netlify-cms'
  ],
  siteMetadata: {
    title: 'Sena',
    author: 'I Komang Sena Aji Buwana',
    description: 'My personal blog and portfolio website',
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/IKSena_'
      },
      {
        name: 'github',
        url: 'https://github.com/iksena'
      }
    ]
  }
};
