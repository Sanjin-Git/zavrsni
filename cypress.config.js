const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "validEmail": "test33@test33.com",
      "validPassword": "test2022",
      "boardName": "The New Board",
      "editedBoardName": "The new name",
      "boarDescription": "something"
  },
    baseUrl: 'https://cypress.vivifyscrum-stage.com/',
    watchForFileChanges: false
  },
});
