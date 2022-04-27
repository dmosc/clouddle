const { join } = require('path')

module.exports = (config) => {
  config.resolve.alias.views = join(__dirname, 'src/views')
  return config
}
