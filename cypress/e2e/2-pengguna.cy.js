beforeEach(() => {
  cy.login('toko@dwiky.com', 'toko24dwiky')
})

describe('Test Add User Cashier kasirAja', () => {
  it('success create users cashier with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/users"] ').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("tes kasir baru")
    cy.get('#email').type("teskasirbaru@tokodwiky.com")
    cy.get('#password').type("teskasirbaru")
    cy.contains('button', 'simpan').click()

    // should be redirected to /users
    cy.location('pathname').should('eq', '/users')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
    
  })

  it('cannot create users cashier without input name of users (cashier)', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.get('#password').type("kasirbaru")
    cy.contains('button', 'simpan').click()

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
    
  })

  it('cannot create users cashier without input email', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#password').type("kasirbaru")
    cy.contains('button', 'simpan').click()

    // should display alert "email" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"email" is not allowed to be empty')
    
  })

  it('cannot create users cashier with invalid email format', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#email').type("kasirbaru@tokodwiky")
    cy.get('#password').type("kasirbaru")
    cy.contains('button', 'simpan').click()

    // should display alert "email" must be a valid email
    cy.get('div[role="alert"]').should('have.text', '"email" must be a valid email')
    
  })

  it('cannot create users cashier without input password', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.contains('button', 'simpan').click()

    // should display alert "password" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"password" is not allowed to be empty')
    
  })

  it('cannot create users cashier without any input', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.get('a[href="/users/create"]').click()
    cy.contains('button', 'simpan').click()

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
    
  })

  it('success edit users cashier with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.contains('tes kasir baru').parent('tr').within(() => {
      cy.get('td').eq(3).click() //untuk mencari button titik 3 di index kolom yang ke 3 (index dimulai dari 0)
      cy.contains('a', 'ubah').click()
    })
    cy.get('#nama').clear().type("kasir baru gaes")
    cy.get('#email').clear().type("kasirbaru.gaes@tokodwiky.com")
    cy.get('#password').type("kasirbarugaes")
    cy.contains('button', 'simpan').click()

    // should be redirected to /users
    cy.location('pathname').should('eq', '/users')

    // should show notification "success item diubah"
    cy.contains("success")
    cy.contains("item diubah")
    
  })

  it('success search users cashier', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()   
    cy.get('.chakra-input.css-2s2hk4').clear().type('kasir baru gaes{enter}')

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/users')

    // should show search for "dwiky"
    cy.contains("kasir baru gaes")
    
  })

  it('success delete users cashier', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()    
    cy.contains('kasir baru gaes').parent('tr').within(() => {
      cy.get('td').eq(3).click() //untuk mencari button titik 3 di index kolom yang ke 3 (index dimulai dari 0)
      cy.contains('button', 'hapus').click()      
    })
    cy.contains('button', 'Delete').click()
    

    // should be redirected to /users
    cy.location('pathname').should('eq', '/users')
    
    // should show notification "success item dihapus"
    cy.contains("success")
    cy.contains("item dihapus")
    
  })
})