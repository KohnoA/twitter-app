/// <reference types="cypress" />

Cypress.Commands.add('logout', () => {
  indexedDB.deleteDatabase('firebaseLocalStorageDb');
});

Cypress.Commands.add('login', () => {
  cy.fixture('testUser').then((testUser) => {
    cy.visit('/login');
    cy.get('[data-testid=login-email-input]').type(testUser.email);
    cy.get('[data-testid=login-password-input]').type(testUser.password);
    cy.get('[data-testid=login-submit-button]').click();
  });
});

declare namespace Cypress {
  interface Chainable {
    logout(): void;
    login(): void;
  }
}
