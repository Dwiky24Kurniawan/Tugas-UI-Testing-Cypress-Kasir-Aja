const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kasirdemo.belajarqa.com',
    specPattern: "cypress/e2e",
    supportFile: false,
    chromeWebSecurity: false,
    // testIsolation: false
    // experimentalStudio: true
    // experimentalSessionAndOrigin: true
  },
});