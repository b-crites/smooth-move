/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://smoothmovecp.com", // Change to your domain
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000, // (Optional) Limits URLs per sitemap file
    robotsTxtOptions: {
      policies: [
        { userAgent: "*", allow: "/" },
        { userAgent: "Googlebot", allow: "/" },
      ],
    },
  };
  