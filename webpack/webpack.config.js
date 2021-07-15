const path = requircle('path')

module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'FILE_NAME.FILE_HASH.js'
      path: path.resolve(__dirname, 'dist')
    }
}