const path = require('path');
const ROOT_PATH = path.join(__dirname, '../');
const PUBLIC_PATH = path.resolve(__dirname, '../', 'public');
const ASSET_PATH = path.join(ROOT_PATH, 'dist');
const MODULES_PATH = path.join(ROOT_PATH, './node_modules');
const HTML_PATH = path.join(ROOT_PATH, './src/html');
const SOURCE_PATH = path.join(ROOT_PATH, './src');

module.exports = {
  ROOT_PATH: ROOT_PATH,
  PUBLIC_PATH: PUBLIC_PATH,
  ASSET_PATH: ASSET_PATH,
  MODULES_PATH: MODULES_PATH,
  HTML_PATH: HTML_PATH,
  SOURCE_PATH: SOURCE_PATH
};
