/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "http://127.0.0.1:8080/api/:path*/",
			},
		];
	},
	reactStrictMode: false,
};

module.exports = nextConfig;
