const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://coffee-cart.app/",
    "pageLoadTimeout" : 100000,
    "defaultCommandTimeout" : 30000,
    chromeWebSecurity: false,
    viewportWidth: 1440,
    viewportHeight: 1000
  },
});
