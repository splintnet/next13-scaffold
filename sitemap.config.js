/** @type {import('next-sitemap').IConfig} */

const config = require('./app.config');

module.exports = {
  siteUrl: config.siteUrl,
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.9,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
  },
};
