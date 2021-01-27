describe('display results', () => {

  it('can display search results', () => {
    // set up fake server to load fake data
    cy.intercept('GET', '/search', { fixture: 'itunes.json' })
      .as('searchResults');

    // visit the app
    cy.visit('/');

    // find the input
    cy.get('.search__form')
      .find('input')
      // type daft punk
      .type('daft punk')
      .should('have.value', 'daft punk');

    // check if spinner is visible
    cy.get('.spinner')
      .should('be.visible');

    // check for the presence of a particular album
    cy.wait('@searchResults')
      .get('main')
      .contains('Alive 2007')
      .should('be.visible');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .click();

    // make sure the explicit album is not displayed
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});
