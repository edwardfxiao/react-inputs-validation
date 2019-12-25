const baseConfig = require('./umd.base.config');
const PATH = require('./build_path');
module.exports = {
  ...baseConfig,
  entry: PATH.ROOT_PATH + 'src/js/Inputs/index.ts',
  devtool: false,
  output: {
    ...baseConfig.output,
    path: PATH.ROOT_PATH + '/lib/components',
    filename: 'index.js',
  },
};
