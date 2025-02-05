export {}; // Next.js requires --isolatedModules in tsconfig to be true. Feel free to remove this if you have an import

describe('Test Home', () => {
  it('redirects to /', () => {
    cy.visit('/home');
    cy.location('pathname').should('equal', '/');
    cy.findByTestId('landing_page').should('exist').and('be.visible');
  });
});
