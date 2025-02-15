export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {    
        '^@src/(.*)$': '<rootDir>/src/$1',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|less|scss|sass)$': 'jest-transform-stub',
    },
    setupFilesAfterEnv: ['./jest.setup.ts', './src/setupTests.ts'],
}