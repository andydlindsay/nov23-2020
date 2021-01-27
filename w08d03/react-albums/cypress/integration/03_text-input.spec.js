describe('text input', () => {

  beforeEach(() => {
    // visit the app
    cy.visit('/');

    // find the input field
    cy.get('.search__form')
      .find('input')
      .as('inputField');
  });

  it('can type into an input field', () => {
    cy.get('@inputField')
      // type into the input field
      .type('Nickelback', { delay: 100 })
      .should('have.value', 'Nickelback');
  });

  it('can handle backspace', () => {
    cy.get('@inputField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
