export default {
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'lambda-alumni-production',
    read_key: process.env.COSMIC_READ_KEY || ''
  }
}
