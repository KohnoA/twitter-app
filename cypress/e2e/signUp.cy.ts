describe('Testing the registration form', () => {
  beforeEach(() => cy.visit('/signup-email'));

  after(() => cy.logout());

  it('Errors should be displayed if fields are left blank', () => {
    cy.get('[data-testid=signup-next-button]').click();
    cy.get('[data-testid=input-error]')
      .should('have.length', 3)
      .contains(/This field is required/);
    cy.get('[data-testid=select-error]')
      .should('have.length', 3)
      .contains(/This field is required/);
  });

  it('An error should be displayed if the passwords do not match', () => {
    cy.fixture('testUser').then((testUser) => {
      const { name, phone, email, password } = testUser;

      cy.get('[data-testid=signup-name-input]').type(name);
      cy.get('[data-testid=signup-phone-input]').type(phone);
      cy.get('[data-testid=signup-email-input]').type(email);
      cy.get('[data-testid=signup-month-select]').select('March');
      cy.get('[data-testid=signup-day-select]').select('24');
      cy.get('[data-testid=signup-year-select]').select('2000');
      cy.get('[data-testid=signup-next-button]').click();

      cy.get('[data-testid=signup-password-form]').should('exist');

      cy.get('[data-testid=signup-password-input]').type(password);
      cy.get('[data-testid=signup-confirm-password-input]').type('njfnwje');
      cy.get('[data-testid=signup-submit-button]').click();

      cy.contains('Passwords must match').should('exist');
    });
  });

  it('Form data should be saved if the user goes back a step', () => {
    cy.fixture('testUser').then((testUser) => {
      const { name, phone, email } = testUser;

      cy.get('[data-testid=signup-name-input]').type(name);
      cy.get('[data-testid=signup-phone-input]').type(phone);
      cy.get('[data-testid=signup-email-input]').type(email);
      cy.get('[data-testid=signup-month-select]').select('March');
      cy.get('[data-testid=signup-day-select]').select('24');
      cy.get('[data-testid=signup-year-select]').select('2000');
      cy.get('[data-testid=signup-next-button]').click();

      cy.get('[data-testid=signup-password-form]').should('exist');
      cy.get('[data-testid=signup-back-button]').click();

      cy.get('[data-testid=signup-name-input]').should('have.value', name);
      cy.get('[data-testid=signup-phone-input]').should('have.value', phone);
      cy.get('[data-testid=signup-email-input]').should('have.value', email);
      cy.get('[data-testid=signup-month-select]').should('have.value', 'March');
      cy.get('[data-testid=signup-day-select]').should('have.value', '24');
      cy.get('[data-testid=signup-year-select]').should('have.value', '2000');
    });
  });

  it('A notification should be displayed if the user already exists', () => {
    cy.fixture('testUser').then((testUser) => {
      const { name, phone, email, password } = testUser;

      cy.get('[data-testid=signup-name-input]').type(name);
      cy.get('[data-testid=signup-phone-input]').type(phone);
      cy.get('[data-testid=signup-email-input]').type(email);
      cy.get('[data-testid=signup-month-select]').select('March');
      cy.get('[data-testid=signup-day-select]').select('24');
      cy.get('[data-testid=signup-year-select]').select('2000');
      cy.get('[data-testid=signup-next-button]').click();

      cy.get('[data-testid=signup-password-form]').should('exist');

      cy.get('[data-testid=signup-password-input]').type(password);
      cy.get('[data-testid=signup-confirm-password-input]').type(password);
      cy.get('[data-testid=signup-submit-button]').click();

      cy.get('[data-testid=signup-general-error]')
        .contains(/A user with this email address is already registered/)
        .should('exist');
    });
  });
});
