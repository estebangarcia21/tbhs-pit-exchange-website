const withPWA = require("next-pwa")

module.exports = withPWA({
  images: {
    domains: ["crafatar.com"]
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    register: true,
    scope: "/app",
    sw: "service-worker.js"
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = { fs: "empty", module: "empty" }
    }

    return config
  }
})
