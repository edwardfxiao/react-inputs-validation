const baseConfig = require('./umd.base.config');
const PATH = require('./build_path');
module.exports = {
  ...baseConfig,
  entry: PATH.ROOT_PATH + 'src/js/Inputs/index.global.ts',
  output: {
    ...baseConfig.output,
    path: PATH.ROOT_PATH + '/lib',
  },
};
