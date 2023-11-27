/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*', // zero or more parameters after /, that is all the endpoints of this app
        headers: [{ key: 'referrer-policy', value: 'no-referrer' }],
      },
    ];
  },
};

module.exports = nextConfig;
