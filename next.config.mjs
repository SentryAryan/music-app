/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'images.unsplash.com',
            'res.cloudinary.com'
        ]
    }
};
module.exports = {
    eslint: {
        ignoreDuringBuilds: true, // Allows production builds to complete even with ESLint errors
    },
};


export default nextConfig;
