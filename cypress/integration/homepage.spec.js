describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('display text', () => {
    cy.tid('main-text').should('contain', 'Test');
    cy.tide('text').should('contain', 'Test');
  });
});
