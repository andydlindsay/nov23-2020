describe('filter tests', () => {

  beforeEach(() => {
    // visit the app
    cy.visit('/');
  });

  it('can untick the explicit check box', () => {
    // find the explicit check box
    cy.get('.filters__form-group')
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can toggle a checkbox by clicking on the label', () => {
    // find the label and click on it
    cy.contains('EP')
      .click();

    // find the input and check if it is checked
    cy.get('#EP')
      .should('be.checked');
  });

});
