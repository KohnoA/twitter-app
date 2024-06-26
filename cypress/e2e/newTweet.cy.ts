describe('Testing new tweet form', () => {
  before(() => cy.login());

  beforeEach(() => cy.visit('/home'));

  after(() => cy.logout());

  it('Tweet must be added', () => {
    const tweetMessage = Math.random()
      .toString(36)
      .slice(2, 20 + 2);

    cy.get('[data-testid=new-tweet-form]').should('exist');
    cy.get('[data-testid=new-tweet-textarea]').type(tweetMessage);
    cy.get('[data-testid=new-tweet-submit]').click();

    cy.get('[data-testid=tweet-list]').contains(tweetMessage).should('exist');
  });
});
