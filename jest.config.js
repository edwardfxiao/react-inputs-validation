module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/assetsTransformer.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^STYLES(.*)$': '<rootDir>/src/css$1',
    '^COMPONENTS(.*)$': '<rootDir>/src/js/app/components$1',
    '^API(.*)$': '<rootDir>/src/js/api$1',
    '^CONFIG(.*)$': '<rootDir>/src/config$1',
    '^IMAGES(.*)$': '<rootDir>/src/image$1',
    '^AUDIOS(.*)$': '<rootDir>/audio/api$1',
    '^VIDEOS(.*)$': '<rootDir>/src/video$1',
    '^LOCALES(.*)$': '<rootDir>/src/locales$1',
    '^COMMON(.*)$': '<rootDir>/src/js/common$1',
    '^APP(.*)$': '<rootDir>/src/js/app$1',
    '^CONSTS(.*)$': '<rootDir>/src/js/consts$1',
    '^PAGES(.*)$': '<rootDir>/src/js/api$1',
    '^ACTIONS(.*)$': '<rootDir>/src/js/actions$1',
    '^STORE(.*)$': '<rootDir>/src/js/store$1',
    '^REDUCERS(.*)$': '<rootDir>/src/js/reducers$1',
    '^VENDOR(.*)$': '<rootDir>/src/js/vendor$1',
  }
};
