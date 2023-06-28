// ***********************************************
// This example commands.js shows you how to
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

// -- Visit multiple domains in one test

Cypress.Commands.add('login', (email, password) => {
    cy.session([email, password], () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.location('pathname').should('eq', '/login')
        cy.get('#email').clear().type(email)
        cy.get('#password').clear().type(password)
        cy.get('button[type="submit"]').click()
        cy.location('pathname').should('eq', '/dashboard')
    },
        {
            cacheAcrossSpecs: true
        })
})