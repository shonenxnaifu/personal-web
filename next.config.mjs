import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",
};

// export default nextConfig;

export default withContentlayer({ ...nextConfig });

// const nextConfig = {
//   reactStrictMode: true,
//   experimental: {
//     appDir: true,
//     esmExternals: "loose",
//   },
//   output: "standalone",
// };

// module.exports = nextConfig;
