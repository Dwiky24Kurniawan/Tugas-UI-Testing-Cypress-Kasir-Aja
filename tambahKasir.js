describe('Open Kasir Aja URL', () => {
    it('input valid username dan password then Login', () => {
        cy.visit('/')
        cy.get('#email').type("toko@dwiky.com")
        cy.get('#password').type("toko24dwiky")
        cy.contains("login").click()
    
        // should be redirected to /dashboard
        cy.url().should('include', '/dashboard')
        cy.contains("kasirAja")
      })

    it('Tambah Pengguna Kasir', () => {
        // cy.visit('/')
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

