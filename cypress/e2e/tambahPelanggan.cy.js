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

  it('Tambah Pelanggan', () => {
    cy.contains("pelanggan").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("new customer")
    cy.get('input[id="no.hp"]').type("089988776655")
    cy.get('#alamat').type("bantul")
    cy.get('#keterangan').type("tes new customer")
    cy.contains("simpan").click()

    // should be redirected to /customers
    cy.url().should('include', '/customers')
  })
})