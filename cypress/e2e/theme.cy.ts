import testUser from '../fixtures/testUser.json';

describe('Theme change testing', () => {
  before(() => {
    const { email, password } = testUser;

    cy.visit('/login');
    cy.get('[data-testid=login-email-input]').type(email);
    cy.get('[data-testid=login-password-input]').type(password);
    cy.get('[data-testid=login-submit-button]')
      .click()
      .then(() => {
        cy.url().should('include', '/home');
      });
  });

  it('', () => {});

  it('save theme value after page reload', () => {});

  // after(() => );
});
