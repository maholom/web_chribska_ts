const { get } = require('http');

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('display text', () => {
    cy.tid('main-text').should('contain', 'Vítejte');
    cy.tide('text').should('contain', 'Vítejte');
  });
  it('routing', () => {
    cy.tid('home').should('contain', 'Vitejte!');
    cy.tid('about').click();
    cy.get('h6').should('contain', 'O nás');
    cy.tid('accommodation').click();
    cy.get('h6').should('contain', 'Nocleh');
    cy.tid('contact').click();
    cy.get('h6').should('contain', 'Pojďte');
    cy.tid('home').click();
    cy.get('h6').should('contain', 'O nás');
  });
});
