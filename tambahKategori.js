import '../support/commands'

describe('Login with auth', () => {
  beforeEach(() => {
    const email = 'toko@dwiky.com'
    const password = 'toko24dwiky'
    cy.LoginWithSession(email, password)
  })

  it('Tambah Kategori', () => {
    cy.visit('/')
    cy.contains("tambah").click()
    cy.get('#nama').type("samsung")
    cy.get('#deskripsi').type("smartphone")
    cy.contains("simpan").click()
    cy.url().should('include', '/categories')
  })
})