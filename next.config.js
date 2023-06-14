// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        hostname: "lens.infura-ipfs.io",
      },
      {
        hostname: "cf-ipfs.com",
      },
      {
        hostname: "cdn.stamp.fyi",
      },
      {
        hostname: "ik.imagekit.io",
      },
    ],
  },
};
