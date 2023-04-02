/** @type {import('next-sitemap').IConfig} */

const config = require('./app.config');

module.exports = {
  siteUrl: config.siteUrl,
  generateRobotsTxt: true, // (optional)
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {},
};
