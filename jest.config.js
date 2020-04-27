module.exports = {
  moduleFileExtensions: ["ts", "js"],
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  globals: {
    "ts-jest": { tsConfig: "<rootDir>/tsconfig.json" },
  },
  testMatch: ["<rootDir>/tests/**/*.spec.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,js}"],
}
