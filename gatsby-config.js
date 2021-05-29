module.exports = {
  siteMetadata: {
    title: 'Coffeeroasters Subscription Site',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fraunces:900', 'Barlow:400, 700'],
        },
      },
    },
  ],
};
