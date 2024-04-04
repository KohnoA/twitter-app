describe('Testing edit profile', () => {
  before(() => cy.login());

  beforeEach(() => cy.visit('/profile'));

  after(() => cy.logout());

  it('user data', () => {
    cy.fixture('testUser').then((testUser) => {
      const { name, email, phone } = testUser;

      cy.get('[data-testid=user-name]').contains(name).should('exist');
      cy.get('[data-testid=user-phone]').contains(phone).should('exist');
      cy.get('[data-testid=user-email]').contains(email).should('exist');
    });
  });

  it('edit modal', () => {
    cy.get('[data-testid=edit-profile-button]').click();
    cy.get('[data-testid=edit-profile-form]').should('exist');
  });

  it('errors', () => {
    cy.get('[data-testid=edit-profile-button]').click();

    cy.get('[data-testid=edit-user-name]').clear();
    cy.get('[data-testid=edit-user-phone]').clear();

    cy.get('[data-testid=edit-submit-button]').click();

    cy.get('[data-testid=input-error]')
      .should('have.length', 2)
      .contains(/This field is required/);
  });

  it('edit profile', () => {
    const newUserDescription = Math.random()
      .toString(36)
      .slice(2, 20 + 2);

    cy.get('[data-testid=edit-profile-button]').click();
    cy.get('[data-testid=edit-user-description]').clear().type(newUserDescription);

    cy.get('[data-testid=edit-submit-button]').click();
    cy.get('[data-testid=user-description]').contains(newUserDescription).should('exist');
  });
});
