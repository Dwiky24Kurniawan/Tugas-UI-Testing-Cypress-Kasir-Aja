describe('Test Login kasirAja', () => {
  it('should open login page first', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')
  })

  it('success login using valid credential', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type("toko@dwiky.com")
    cy.get('#password').type("toko24dwiky")
    cy.contains("login").click()

    // should be redirected to dashboard page /dashboard
    cy.url().should('include', '/dashboard')

    // should contains text "kasirAja"
    cy.contains("kasirAja")
  })

  it('cannot login with invalid credential', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type("tokonya@dwiky.com")
    cy.get('#password').type("tokodwiky")
    cy.contains("login").click()

    // should display alert "email" is not allowed to be empty
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','Kredensial yang Anda berikan salah')
  })

  it('cannot login without input email', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#password').type("toko24dwiky")
    cy.contains("login").click()

    // should display alert "email" is not allowed to be empty
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"email" is not allowed to be empty')
  })

  it('cannot login without input password', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type("toko@dwiky.com")
    cy.contains("login").click()

    // should display alert "password" is not allowed to be empty
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"password" is not allowed to be empty')
  })

  it('cannot login with invalid email format', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type("toko@dwiky")
    cy.get('#password').type("toko24dwiky")
    cy.contains("login").click()

    // should display alert "email" must be a valid email
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"email" must be a valid email')
  })

  it('cannot login without any input', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.contains("login").click()

    // should display alert "email" is not allowed to be empty
    cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"email" is not allowed to be empty')
  })
})