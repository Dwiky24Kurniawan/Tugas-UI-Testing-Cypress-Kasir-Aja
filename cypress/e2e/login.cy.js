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
})

// import '../support/commands'

// describe('Open Kasir Aja URL and Login with auth', () => {
//   beforeEach(() => {
//     const email = 'toko@dwiky.com'
//     const password = 'toko24dwiky'
//     cy.LoginWithSession(email, password)
//   })



//   // it('Tambah Kategori', () => {
//   //   // cy.visit('/categories')
//   //   cy.contains("kategori").click()
//   //   cy.contains("tambah").click()
//   //   cy.get('#nama').type("samsung")
//   //   cy.get('#deskripsi').type("smartphone")
//   //   cy.contains("simpan").click()
//   //   cy.url().should('include', '/categories')
//   // })
// })