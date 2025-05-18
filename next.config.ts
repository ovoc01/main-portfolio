import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: false,
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            },
        ]
    }
  /* config options here */
};

export default nextConfig;
