module.exports = {
  target: 'serverless',
  experimental: {
    async rewrites () {
      return [
        { source: '/hello', destination: '/hi/en' },
        { source: '/hola', destination: '/hi/es' },
        { source: '/ni-hao', destination: '/hi/zh' }
      ]
    }
  }
}
