describe('Theme change testing', () => {
  before(() => cy.login());

  beforeEach(() => cy.visit('/home'));

  after(() => cy.logout());

  it('Must be a light theme', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)');
  });

  it('The theme of the application should change', () => {
    cy.get('[data-testid=toggle-theme-switch]').should('exist').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 13, 24)');
  });

  it('The selected theme should persist when the page is reloaded', () => {
    cy.get('[data-testid=toggle-theme-switch]').should('exist').click();
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 13, 24)');
    cy.reload();
    cy.get('body').should('have.css', 'background-color', 'rgb(18, 13, 24)');
  });
});
