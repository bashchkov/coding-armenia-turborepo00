module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-codingam`
  extends: ["codingam"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
