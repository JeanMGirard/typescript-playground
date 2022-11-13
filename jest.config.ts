import type {JestConfigWithTsJest} from 'ts-jest'
import type {Config} from 'jest';


export default async (): Promise<JestConfigWithTsJest|Config> => {
  return {
    // projects: ['<rootDir>/projects/*'],
    verbose: false,
    noStackTrace: true,
    passWithNoTests: true,
    // listTests: true,
    // silent: true,
    // detectLeaks: true,
    // detectOpenHandles: true,
    // onlyChanged: true,
    // onlyFailures: true,

    // cache: true,
    cacheDirectory: "./.cache/jest",

    roots: [
      '<rootDir>/src',
      '<rootDir>/tests'
    ],
    testMatch: [
      "**/tests/**/*.+(ts|js)",
      "**/*.+(spec|test).+(ts|tsx|js|jsx)",
      "**/?(*.).test.+(ts|js)"
    ],
    // reporters: ['jest-silent-reporter', 'summary'],
    transform: {
      "^.+\\.tsx?$": ['ts-jest', {
        tsconfig: 'tsconfig.test.json'
      }]
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
      '^@lib/(.*)$': '<rootDir>/src/lib/$1',
      '^types/(.*)$': '<rootDir>/types/$1'
    },
    // collectCoverage: true,
    collectCoverageFrom: ["./src/**/*"],
    coveragePathIgnorePatterns: ["./src/main.ts"],
    coverageDirectory: "./coverage",
    coverageThreshold: {
      global: { lines: 70,  branches: 70,  functions: 70,  statements: 80  }
    }
  };
};
