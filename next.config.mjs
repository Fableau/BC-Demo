/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{
            source: '/',
            destination: '/form/step2',
            permanent: true,
    }]},

    sassOptions: {
        includePaths: ['./src'],
        prependData: `@use "@/styles/_colors.scss";`,
    }
};

export default nextConfig;