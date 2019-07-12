const { defaults } = require('jest-config');

module.exports = {
  modulePaths: [
    '/shared/vendor/modules',
  ],
  moduleDirectories: [
    'node_modules',
    'bower_components',
    'shared',
  ],
  setupFilesAfterEnv: ['<rootDir>src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
