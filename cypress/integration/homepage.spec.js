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
    cy.tid('link-home').click();
    cy.get('h1').should('contain', 'Home');
  });
});
