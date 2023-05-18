const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://dsw-dev.web.app",
    viewportHeight:768,
    viewportWidth:1366,
    retries:3,
    env:{
      email:"dswtest@yopmail.com",
      password:"Grapesare@9",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
