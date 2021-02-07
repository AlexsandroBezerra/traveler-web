const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  images: {
    domains: ['localhost', 'traveler-api.alexbezerra.xyz'],
  }
})
