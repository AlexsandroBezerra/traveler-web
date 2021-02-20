const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  images: {
    domains: ['localhost', 'alex-traveler.s3.amazonaws.com'],
  }
})
