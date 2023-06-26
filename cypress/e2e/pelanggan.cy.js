beforeEach(() => {
  cy.login('toko@dwiky.com','toko24dwiky')
})

describe('Test Add Customer kasirAja', () => {
  it('success add customer with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/customers"]').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("zain al farizky")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("089988776655")
    cy.wait(1000)
    cy.get('#alamat').type("bantul")
    cy.wait(1000)
    cy.get('#keterangan').type("customer zain bantul")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should be redirected to /customers
    cy.location('pathname').should('eq', '/customers')
    
    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
    cy.wait(1000)
  })

  it('cannot add customer without input name of customer', () => {
    cy.visit('/')
    cy.get('a[href="/customers"]').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("089988776655")
    cy.wait(1000)
    cy.get('#alamat').type("bantul")
    cy.wait(1000)
    cy.get('#keterangan').type("customer zain bantul")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text','"name" is not allowed to be empty')
    cy.wait(1000)
  })

  it('cannot add customer with invalid phone number format', () => {
    cy.visit('/')
    cy.get('a[href="/customers"]').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("zain al farizky")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("no hp zain")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "phone" must be a number
    cy.get('div[role="alert"]').should('have.text','"phone" must be a number')
    cy.wait(1000)
  })

  it('cannot add customer without any input', () => {
    cy.visit('/')
    cy.get('a[href="/customers"]').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text','"name" is not allowed to be empty')
    cy.wait(1000)
  })

  it('success edit pelanggan with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/customers"]').click()
    cy.wait(1000)
    cy.get('.css-xl71ch').get('button[type="button"]').eq(2).click()
    cy.wait(1000)
    cy.contains('a', 'ubah').click()
    cy.wait(1000)
    cy.get('#nama').clear().type("zain al farizky kurniawan")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').clear().type("08987654321")
    cy.wait(1000)
    cy.get('#alamat').clear().type("yogyakarta")
    cy.wait(1000)
    cy.get('#keterangan').clear().type("edit customer zain")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should be redirected to /customers
    cy.location('pathname').should('eq', '/customers')
    
    // should show notification "success item diubah"
    cy.contains("success")
    cy.contains("item diubah")
  })

  it('success search customer', () => {
    cy.visit('/')
    cy.get('a[href="/customers"]').click()
    cy.wait(1000)
    cy.get('.chakra-input.css-2s2hk4').clear().type('zain{enter}')
    cy.wait(1000)

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show search for "laptop gaming"
    cy.contains("zain")
    cy.wait(1000)
  })
  it('success add customer with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/customers"]').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("zain al farizky")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("089988776655")
    cy.wait(1000)
    cy.get('#alamat').type("bantul")
    cy.wait(1000)
    cy.get('#keterangan').type("customer zain bantul")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should be redirected to /customers
    cy.location('pathname').should('eq', '/customers')
    
    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
    cy.wait(1000)
  })
})