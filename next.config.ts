import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'keauty.com.ua',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'ksisters.com.ua',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'koreanstory.com.ua',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'content1.rozetka.com.ua',
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;
