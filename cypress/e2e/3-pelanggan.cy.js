beforeEach(() => {
  cy.login('toko@dwiky.com','toko24dwiky')
})

describe('Test Add Customer kasirAja', () => {
  it('success add customer with valid input', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("jovial")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("089556564342")
    cy.wait(1000)
    cy.get('#alamat').type("bantul")
    cy.wait(1000)
    cy.get('#keterangan').type("customer jovial bantul")
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

  it('cannot add customer without input name', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("089556564342")
    cy.wait(1000)
    cy.get('#alamat').type("bantul")
    cy.wait(1000)
    cy.get('#keterangan').type("customer jovial bantul")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text','"name" is not allowed to be empty')
    cy.wait(1000)
  })

it('cannot add customer with invalid phone number format', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("jovial")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("no hp jovial")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "phone" must be a number
    cy.get('div[role="alert"]').should('have.text','"phone" must be a number')
    cy.wait(1000)
  })

  it('cannot add customer with invalid phone number format', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.wait(1000)
    cy.get('a[href="/customers/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("jovial")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').type("no hp jovial")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "phone" must be a number
    cy.get('div[role="alert"]').should('have.text','"phone" must be a number')
    cy.wait(1000)
  })

  it('cannot add customer without any input', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
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
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.wait(1000)
    cy.contains('jovial').parent('tr').within(() => {
      cy.get('td').eq(3).click() //untuk mencari button titik 3 di index kolom yang ke 3 (index dimulai dari 0)
      cy.wait(1000)
      cy.contains('a', 'ubah').click()
      cy.wait(1000)
    })
    cy.get('#nama').clear().type("jovial hasmi")
    cy.wait(1000)
    cy.get('input[id="no.hp"]').clear().type("08987654001")
    cy.wait(1000)
    cy.get('#alamat').clear().type("yogyakarta")
    cy.wait(1000)
    cy.get('#keterangan').clear().type("edit customer jovial hasmi")
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
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.wait(1000)
    cy.get('.chakra-input.css-2s2hk4').clear().type('jovial{enter}')
    cy.wait(1000)

    // should be redirected to /customers
    cy.location('pathname').should('eq', '/customers')

    // should show search for "laptop gaming"
    cy.contains("jovial")
    cy.wait(1000)
  })

  it('success delete customer', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.wait(1000)
    cy.contains('jovial hasmi').parent('tr').within(() => {
      cy.get('td').eq(3).click() //untuk mencari button titik 3 di index kolom yang ke 3 (index dimulai dari 0)
      cy.wait(1000)
      cy.contains('button', 'hapus').click()
      cy.wait(1000)
    })
    cy.contains('button', 'Delete').click()
    cy.wait(1000)

    // should be redirected to /customers
    cy.location('pathname').should('eq', '/customers')
    
    // should show notification "success item dihapus"
    cy.contains("success")
    cy.contains("item dihapus")
    cy.wait(1000)
  })
})