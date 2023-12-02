/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		SERVER_URL: process.env.SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://127.0.0.1:8000/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: 'http://127.0.0.1:8000/uploads/:path*',
			},
		]
	},
	images: {
		domains: ['via.placeholder.com', 'localhost:4200'],
	},
}

module.exports = nextConfig
