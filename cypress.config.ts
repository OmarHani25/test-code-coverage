import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '1wi9s7',
  env: {
    codeCoverage: {
      url: '/api/__coverage__',
    },
  },

  e2e: {
    // specPattern:"cypress/e2e/testFiles.cy.js",
    experimentalRunAllSpecs:true,
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
