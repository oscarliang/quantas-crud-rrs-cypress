/* Tests to confirm test server is running properly */
describe('Test server', () => {
  it('expect - the test server to be running', () => {
    cy.request(Cypress.env('host')).then(response => {
      expect(response.status).to.equal(200);
    });
  });

  it('assert - global variables are properly set', () => {
    cy.getDefaultMockRequest();
    cy.visit(Cypress.env('host'));
    cy.window().should('have.property', '__initialData__');
  });

  it('expect - url forward to homepage', () => {
    cy.url().should('eq', "http://" + Cypress.env('host') + '/homepage')
  });
});
