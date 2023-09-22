module.exports = {
  roots: ['<rootDir>/packages'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  testMatch: ['<rootDir>/packages/**/*/*.test.tsx'],
  modulePaths: ['<rootDir>/dist'],
  testPathIgnorePatterns: ['node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  coverageReporters: [
    [
      'json',
      {
        projectRoot: '../../',
      },
    ],
    'text',
  ],
};
