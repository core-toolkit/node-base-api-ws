module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/http/*.js'],
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['./node_modules/'],
  silent: false,
  forceExit: true,
  verbose: true,
  testEnvironment: 'node',
};
