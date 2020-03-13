module.exports = {
  "moduleNameMapper": {
    //  "\\.(css|scss|sass|less)$": "identity-obj-proxy",
    //  "^@utilities/(.*)$": "<rootDir>/src/renderer/js/utilities/$1",
    //  "^@redux/(.*)$": "<rootDir>/src/renderer/js/redux/$1"
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}