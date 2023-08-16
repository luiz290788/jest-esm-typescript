export default {
  preset: 'ts-jest/presets/js-with-ts-esm',
  testMatch: ['**/*.test.ts'],
  rootDir: '.',
  testEnvironment: '<rootDir>/my-environment.ts',
}
