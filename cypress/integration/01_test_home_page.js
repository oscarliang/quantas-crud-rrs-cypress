describe("Test home page", () => {
  beforeEach(() => {
    cy.getDefaultMockRequest();
    cy.visit(Cypress.env("host") + "/homepage");
  });

  it("expect - load all of the cars", () => {
    cy
      .get("table tbody tr")
      .should(($p) => {
        expect($p).to.have.length(8)
      });
  });

  it("expect - init add car button should be disabled", () => {
    cy
      .get("button[type='submit']")
      .should(($p) => {
        expect($p).have.class('disabled')
      });
  });

  it("expect - add a car into car list", () => {
    cy.get('#hf-name').type('Porsche 718');
    cy.get('#hf-brand').select('PORSCHE');
    cy.get('#inline-2WD').check();

    cy
    .get("button[type='submit']")
    .should(($p) => {
      expect($p).not.have.class('disabled')
    });

    cy.get("button[type='submit']").click();
    cy.wait("@addCar").then(function(xhr){
      cy
      .get("table tbody tr")
      .should(($p) => {
        expect($p).to.have.length(9)
      });
    })
  });

});
