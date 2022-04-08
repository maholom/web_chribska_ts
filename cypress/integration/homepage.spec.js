const { get } = require('http');

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('display text', () => {
    cy.tid('menu-home-md').should('contain', 'Vítejte!');
  });
  it('routing', () => {
    cy.tid('menu-home-md').should('contain', 'Vítejte!');
    cy.tid('menu-about-md').click();
    cy.tid('menu-about-md').should('contain', 'Dobrodružství čekají');
    cy.tid('menu-accommodation-md').click();
    cy.tid('menu-accommodation-md').should('contain', 'Nocleh');
    cy.tid('menu-contact-md').click();
    cy.tid('menu-contact-md').should('contain', 'Pojďte dál');
    cy.tid('menu-home-md').click();
    cy.tid('menu-home-md').should('contain', 'Vítejte!');
  });
});
