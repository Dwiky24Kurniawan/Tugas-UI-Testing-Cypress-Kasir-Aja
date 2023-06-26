const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ub5u7u',
  e2e: {
    baseUrl: 'https://kasirdemo.belajarqa.com',
    specPattern: "cypress/e2e",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true
  },
});