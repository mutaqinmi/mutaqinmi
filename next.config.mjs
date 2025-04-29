/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.mutaqin.me",
                port: "",
                pathname: "/files/**",
            }
        ]
    }
};

export default nextConfig;
