describe('Test Login kasirAja', () => {
  it('success login using valid credential', () => {
    cy.visit('/')
    cy.location('pathname').should('eq', '/login')
    cy.get('#email').type("toko@dwiky.com")
    cy.get('#password').type("toko24dwiky")
    cy.get('button[type="submit"]').click()

    // should be redirected to dashboard page /dashboard
    cy.location('pathname').should('eq', '/dashboard')

    // should contains text "kasirAja"
    cy.get('h3').invoke('text').should('contain', 'kasirAja');
  })

  it('cannot login with invalid credential', () => {
    cy.visit('/')
    cy.get('#email').type("tokonya@dwiky.com")
    cy.get('#password').type("tokodwiky")
    cy.get('button[type="submit"]').click()

    // should display alert "email" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text','Kredensial yang Anda berikan salah')
  })

  it('cannot login without input email', () => {
    cy.visit('/')
    cy.get('#password').type("toko24dwiky")
    cy.get('button[type="submit"]').click()

    // should display alert "email" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text','"email" is not allowed to be empty')
  })

  it('cannot login without input password', () => {
    cy.visit('/')
    cy.get('#email').type("toko@dwiky.com")
    cy.contains("login").click()

    // should display alert "password" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text','"password" is not allowed to be empty')
  })

  it('cannot login with invalid email format', () => {
    cy.visit('/')
    cy.get('#email').type("toko@dwiky")
    cy.get('#password').type("toko24dwiky")
    cy.get('button[type="submit"]').click()

    // should display alert "email" must be a valid email
    cy.get('div[role="alert"]').should('have.text','"email" must be a valid email')
  })

  it('cannot login without any input', () => {
    cy.visit('/')
    cy.get('button[type="submit"]').click()

    // should display alert "email" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text','"email" is not allowed to be empty')
  })
})