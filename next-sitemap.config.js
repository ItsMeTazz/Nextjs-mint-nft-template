/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
  // TODO: Update your app URL below
  siteUrl: 'https://nftmint.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
