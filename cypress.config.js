const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    baseurl: 'http://lojaebac.ebaconline.art.br/', 
  },
});
