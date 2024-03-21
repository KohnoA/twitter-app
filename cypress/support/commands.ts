/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// import { signOut, signIn, signUp } from '../../src/services/authentication';
// import testUser from '../fixtures/testUser.json';

// Cypress.Commands.add('logout', () => {
//   signOut();
// });

// Cypress.Commands.add('login', (email = testUser.email, password = testUser.password) => {
//   signIn(email, password);
// });

// Cypress.Commands.add('signup', (userData = testUser) => {
//   signUp(userData);
// });

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       logout(): Chainable<void>;
//       login(email: string, password: string): Chainable<void>;
//       signup(userData: typeof testUser): Chainable<void>;
//     }
//   }
// }
