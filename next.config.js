const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  images: {
    domains: ['localhost', 'api-traveler.alexbezerra.xyz'],
  }
})
