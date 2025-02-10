import { defineConfig } from 'cypress';
import webpack from '@cypress/webpack-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);
  require('@cypress/code-coverage/task')(on, config);

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js'],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'ts-loader',
                  options: {
                    transpileOnly: true
                  }
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );
  return config;
}


export default defineConfig({
  projectId: '1wi9s7',
  env: {
    codeCoverage: {
      url: '/api/__coverage__',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3000/',
    supportFile: 'cypress/support/e2e.ts',
    experimentalRunAllSpecs: true,
    specPattern: [
      'cypress/e2e/*.cy.ts',
      'cypress/e2e/*.feature', 
      'cypress/e2e/*.ts'
    ],
    setupNodeEvents,
  },
});