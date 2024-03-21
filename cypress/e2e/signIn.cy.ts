describe('Testing the login form', () => {
  beforeEach(() => cy.visit('login'));

  after(() => cy.logout());

  it('Password should change visibility', () => {
    cy.get('[data-testid=login-password-input]')
      .type('test')
      .should('have.attr', 'type', 'password');
    cy.get('[data-testid=toggle-password-visibility]').click();
    cy.get('[data-testid=login-password-input]').should('have.attr', 'type', 'text');
  });

  it('Messages should be displayed that fields are required', () => {
    cy.get('[data-testid=login-submit-button]').click();

    cy.url().should('not.include', 'home');

    cy.get('[data-testid=input-error]')
      .should('have.length', 2)
      .contains(/This field is required/);
  });

  it('Authorization should not work if fields are invalid', () => {
    cy.get('[data-testid=login-email-input]').type('Invalid email');
    cy.get('[data-testid=login-password-input]').type('Invalid password');
    cy.get('[data-testid=login-submit-button]').click();

    cy.url().should('not.include', 'home');

    cy.contains(/Invalid email value/).should('exist');
    cy.contains(
      /The password must contain a minimum of 8 characters, one capital letter and one number/,
    ).should('exist');
  });

  it('Authorization should work correctly', () => {
    cy.fixture('testUser').then((testUser) => {
      cy.get('[data-testid=login-email-input]').type(testUser.email);
      cy.get('[data-testid=login-password-input]').type(testUser.password);
      cy.get('[data-testid=login-submit-button]').click();

      cy.url().should('include', 'home');
    });
  });
});
