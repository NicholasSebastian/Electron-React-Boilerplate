module.exports = {
  entry: './src/renderer.index.tsx',
  target: 'electron-renderer',
  devtool: 'source-map',
  module: { 
    rules: [{
      test: /\.ts(x?)$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }] 
  }
};
