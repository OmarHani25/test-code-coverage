// cypress/support/step_definitions/home.steps.ts
import {  When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I visit the {string} page', (page: string) => {
  cy.visit(page);
});

Then('I should be redirected to {string}', (path: string) => {
  cy.location('pathname').should('equal', path);
});

Then('I should see the landing page', () => {
  cy.findByTestId('landing_page')
    .should('exist')
    .and('be.visible');
});