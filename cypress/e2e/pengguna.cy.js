beforeEach(() => {
  cy.login('toko@dwiky.com', 'toko24dwiky')
})

describe('Test Add User Cashier kasirAja', () => {
  it('success create users cashier with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/users"] ').click()
    cy.wait(1000)
    cy.get('a[href="/users/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("kasir baru dwiky")
    cy.wait(1000)
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.wait(1000)
    cy.get('#password').type("kasirbaru")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should be redirected to /users
    cy.location('pathname').should('eq', '/users')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
    cy.wait(1000)
  })

  it('cannot create users cashier without input name of users (cashier)', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('a[href="/users/create"]').click()
    cy.wait(1000)
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.wait(1000)
    cy.get('#password').type("kasirbaru")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
    cy.wait(1000)
  })

  it('cannot create users cashier without input email', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('a[href="/users/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("kasir baru dwiky")
    cy.wait(1000)
    cy.get('#password').type("kasirbaru")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "email" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"email" is not allowed to be empty')
    cy.wait(1000)
  })

  it('cannot create users cashier with invalid email format', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('a[href="/users/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("kasir baru dwiky")
    cy.wait(1000)
    cy.get('#email').type("kasirbaru@tokodwiky")
    cy.wait(1000)
    cy.get('#password').type("kasirbaru")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "email" must be a valid email
    cy.get('div[role="alert"]').should('have.text', '"email" must be a valid email')
    cy.wait(1000)
  })

  it('cannot create users cashier without input password', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('a[href="/users/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("kasir baru dwiky")
    cy.wait(1000)
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "password" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"password" is not allowed to be empty')
    cy.wait(1000)
  })

  it('cannot create users cashier without any input', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('a[href="/users/create"]').click()
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
    cy.wait(1000)
  })

  it('success edit users cashier with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('.css-xl71ch').get('button[type="button"]').eq(2).click()
    cy.wait(1000)
    cy.contains('a', 'ubah').click()
    cy.wait(1000)
    cy.get('#nama').clear().type("kasir baru gaes")
    cy.wait(1000)
    cy.get('#email').clear().type("kasirbaru.gaes@tokodwiky.com")
    cy.wait(1000)
    cy.get('#password').type("kasirbarugaes")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should be redirected to /users
    cy.location('pathname').should('eq', '/users')

    // should show notification "success item diubah"
    cy.contains("success")
    cy.contains("item diubah")
    cy.wait(1000)
  })

  it('success search users cashier', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('.chakra-input.css-2s2hk4').clear().type('dwiky{enter}')
    cy.wait(1000)

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/users')

    // should show search for "dwiky"
    cy.contains("dwiky")
    cy.wait(1000)
  })

  it('success delete users cashier', () => {
    cy.visit('/')
    cy.get('a[href="/users"]').click()
    cy.wait(1000)
    cy.get('.css-xl71ch').get('button[type="button"]').eq(2).click()
    cy.wait(1000)
    cy.contains('button', 'hapus').click()
    cy.wait(1000)
    cy.contains('button', 'Delete').click()
    cy.wait(1000)

    // should be redirected to /users
    cy.location('pathname').should('eq', '/users')
    
    // should show notification "success item dihapus"
    cy.contains("success")
    cy.contains("item dihapus")
    cy.wait(1000)
  })

  it('success create users cashier again', () => {
    cy.visit('/')
    // cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(8) > div > div > div').click()
    cy.get('a[href="/users"] ').click()
    cy.wait(1000)
    cy.get('a[href="/users/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("kasir baru dwiky")
    cy.wait(1000)
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.wait(1000)
    cy.get('#password').type("kasirbaru")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should be redirected to /users
    cy.location('pathname').should('eq', '/users')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
    cy.wait(1000)
  })
})