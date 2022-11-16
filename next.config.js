const withPWA = require("next-pwa")({
	dest: "public",
	register: process.env.NODE_ENV !== "development",
	disable: process.env.NODE_ENV === "development",
	// Only useful in development mode, it's handled automatically on deploy
	// mode: "production",
});


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
