const tsconfig = require("./tsconfig.json")
const moduleNameMapper = require("tsconfig-paths-jest")(tsconfig)

module.exports = {
  rootDir: "./src",
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["../setup-tests.ts"],
  coveragePathIgnorePatterns: ["<rootDir>/src/generated"],
  moduleNameMapper
}
