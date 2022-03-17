const { get } = require('http');

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('display text', () => {
    cy.tid('main-text').should('contain', 'Test');
    cy.tide('text').should('contain', 'Test');
  });
  it('routing', () => {
    cy.get('h1').should('contain', 'Home');
    cy.tid('link-about').click();
    cy.get('h1').should('contain', 'About');
    cy.tid('link-accommodation').click();
    cy.get('h1').should('contain', 'Accommodation');
    cy.tid('link-intro').click();
    cy.get('h1').should('contain', 'Intro');
    cy.get('button').should('contain', 'Vstupte').click();
    // cy.tid('button-intro')
    cy.get('h1').should('contain', 'Home');
    cy.tid('link-accommodation').click();
    cy.get('h1').should('contain', 'Accommodation');
    cy.tid('link-references').click();
    cy.get('h1').should('contain', 'References');
    cy.tid('link-guest').click();
    cy.get('h1').should('contain', 'Guest');
    cy.tid('link-home').click();
    cy.get('h1').should('contain', 'Home');
  });
});
