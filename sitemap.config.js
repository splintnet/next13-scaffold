/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.next13.dev';

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {},
};
