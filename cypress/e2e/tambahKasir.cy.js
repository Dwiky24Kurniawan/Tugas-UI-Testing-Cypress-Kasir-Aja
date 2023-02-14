describe('Open Kasir Aja URL', () => {
  it('should contains endpoint /login', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')
  })

  it('input valid username dan password then Login', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type("toko@dwiky.com")
    cy.get('#password').type("toko24dwiky")
    cy.contains("login").click()

    // should be redirected to /dashboard
    cy.url().should('include', '/dashboard')
    cy.contains("kasirAja")
  })

  it('Tambah Pengguna Kasir', () => {
    cy.contains("pengguna").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("toko dwiky kurniawan")
    cy.get('#email').type("toko@dwiky.com")
    cy.get('#password').type("toko24dwiky")
    cy.contains("simpan").click()

    // should be redirected to /users
    cy.url().should('include', '/users')
  })
})