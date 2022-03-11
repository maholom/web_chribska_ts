describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('display text', () => {
    cy.get('p').should('contain', 'Test');
  });
});
