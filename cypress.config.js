module.exports = {
  projectId: "x94nsu",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 1,
      // openMode: 0,
    },
    env: {
      url: "https://rahulshettyacademy.com"
    },
    specPattern: 'cypress/integration/example/*.js'
  },
};
