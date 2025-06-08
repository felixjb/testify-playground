export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  testRegex: ".*\\.jest\\.ts$",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      { useESM: true, tsconfig: { module: "ESNext" } },
    ],
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "^@playground/core$": "<rootDir>/../../packages/core/src/index.ts",
  },
  transformIgnorePatterns: ["node_modules/(?!(@playground)/)"],
};
