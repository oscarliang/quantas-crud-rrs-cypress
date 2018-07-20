// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('getDefaultMockRequest', (options = {}) => {
  cy.server();

  cy.route('POST', '/api/cars', 'fixture:addToCarList.json').as('addCar');

  cy.route('GET', '/api/cars?key=name*', 'fixture:filterByName.json').as('filterByName');

  cy.route('GET', '/api/cars?key=brand*', 'fixture:filterByBrand.json').as('filterByBrand');

  cy.route('GET', '/api/cars?key=drive*', 'fixture:filterByDrive.json').as('filterByDrive');

  // cy.route('*/makes.json', 'fixture:makes.json');

  // cy.route('*/models.json', 'fixture:models.json');
});
