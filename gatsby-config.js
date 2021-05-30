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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Frontend Mentor Coffeeroasters Subscription Site`,
        short_name: `Frontend Mentor Coffee`,
        start_url: `/`,
        background_color: `#FEFCF7`,
        theme_color: `#0E8784`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
