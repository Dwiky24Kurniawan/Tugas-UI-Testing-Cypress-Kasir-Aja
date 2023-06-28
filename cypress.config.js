const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ub5u7u',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Report of UI Testing - Kasir Aja',
    },
  },
  e2e: {
    baseUrl: 'https://kasirdemo.belajarqa.com',
    specPattern: "cypress/e2e",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  }
});