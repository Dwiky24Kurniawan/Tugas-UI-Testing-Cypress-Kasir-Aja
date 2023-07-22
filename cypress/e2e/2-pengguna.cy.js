beforeEach(() => {
  cy.login('toko@dwiky.com', 'toko24dwiky')
})

describe('Test Add User Cashier kasirAja', () => {
  it('success add user cashier with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/users"] ').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("tes kasir baru")
    cy.get('#email').type("teskasirbaru@tokodwiky.com")
    cy.get('#password').type("teskasirbaru")
    cy.contains('button', 'simpan').click()

    cy.location('pathname').should('eq', '/users')

    cy.contains("success")
    cy.contains("item ditambahkan")
    
  })

  it('cannot add user cashier without input name', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.get('#password').type("kasirbaru")
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
    
  })

  it('cannot add user cashier without input email', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#password').type("kasirbaru")
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text', '"email" is not allowed to be empty')
    
  })

  it('cannot add user cashier with invalid email format', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#email').type("kasirbaru@tokodwiky")
    cy.get('#password').type("kasirbaru")
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text', '"email" must be a valid email')
    
  })

  it('cannot add user cashier without input password', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text', '"password" is not allowed to be empty')
    
  })

  it('cannot add user cashier without any input', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
    
  })

  it('success edit user cashier with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.contains('tes kasir baru').parent('tr').within(() => {
      cy.get('td').eq(3).click()
      cy.contains('a', 'ubah').click()
    })
    cy.get('#nama').clear().type("kasir baru gaes")
    cy.get('#email').clear().type("kasirbaru.gaes@tokodwiky.com")
    cy.get('#password').type("kasirbarugaes")
    cy.contains('button', 'simpan').click()

    cy.location('pathname').should('eq', '/users')

    cy.contains("success")
    cy.contains("item diubah")
    
  })

  it('success search user cashier', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()   
    cy.get('.chakra-input.css-2s2hk4').clear().type('kasir baru gaes{enter}')

    cy.location('pathname').should('eq', '/users')

    cy.contains("kasir baru gaes")
    
  })

  it('success delete user cashier', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()    
    cy.contains('kasir baru gaes').parent('tr').within(() => {
      cy.get('td').eq(3).click()
      cy.contains('button', 'hapus').click()
    })
    cy.contains('button', 'Delete').click()
    
    cy.location('pathname').should('eq', '/users')
    
    cy.contains("success")
    cy.contains("item dihapus")
    
  })
})