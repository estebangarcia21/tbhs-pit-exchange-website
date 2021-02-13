module.exports = {
  rootDir: "./src",
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["../setup-tests.ts"],
  coveragePathIgnorePatterns: ["<rootDir>/src/generated"]
}
