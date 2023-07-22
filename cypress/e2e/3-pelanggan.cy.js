beforeEach(() => {
  cy.login('toko@dwiky.com','toko24dwiky')
})

describe('Test Add Customer kasirAja', () => {
  it('success add customer with valid input', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()    
    cy.get('a[href="/customers/create"]').click()    
    cy.get('#nama').type("jovial")   
    cy.get('input[id="no.hp"]').type("089556564342") 
    cy.get('#alamat').type("bantul")
    cy.get('#keterangan').type("customer jovial bantul")
    cy.contains('button', 'simpan').click()

    cy.location('pathname').should('eq', '/customers')
    
    cy.contains("success")
    cy.contains("item ditambahkan")
  })

  it('cannot add customer without input name', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.get('a[href="/customers/create"]').click()
    cy.get('input[id="no.hp"]').type("089556564342")
    cy.get('#alamat').type("bantul")
    cy.get('#keterangan').type("customer jovial bantul")
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text','"name" is not allowed to be empty')
  })

  it('cannot add customer with invalid phone number format', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.get('a[href="/customers/create"]').click()
    cy.get('#nama').type("jovial")
    cy.get('input[id="no.hp"]').type("no hp jovial")
    cy.get('#alamat').type("bantul")
    cy.get('#keterangan').type("customer jovial bantul")
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text','"phone" must be a number')
  })

  it('cannot add customer without any input', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.get('a[href="/customers/create"]').click()
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text','"name" is not allowed to be empty')
  })

  it('success edit customer with valid input', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.contains('jovial').parent('tr').within(() => {
      cy.get('td').eq(3).click()
      cy.contains('a', 'ubah').click()
    })
    cy.get('#nama').clear().type("jovial hasmi")
    cy.get('input[id="no.hp"]').clear().type("08987654001")
    cy.get('#alamat').clear().type("yogyakarta")
    cy.get('#keterangan').clear().type("edit customer jovial hasmi")
    cy.contains('button', 'simpan').click()

    cy.location('pathname').should('eq', '/customers')
    
    cy.contains("success")
    cy.contains("item diubah")
  })

  it('success search customer', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.get('.chakra-input.css-2s2hk4').clear().type('jovial{enter}')

    cy.location('pathname').should('eq', '/customers')

    cy.contains("jovial")
  })

  it('success delete customer', () => {
    cy.visit('/')
    cy.get('#root > div > div > div.css-tnxwfz > div > a:nth-child(9)').click()
    cy.contains('jovial hasmi').parent('tr').within(() => {
      cy.get('td').eq(3).click()
      cy.contains('button', 'hapus').click()
    })
    cy.contains('button', 'Delete').click()

    cy.location('pathname').should('eq', '/customers')
    
    cy.contains("success")
    cy.contains("item dihapus")
  })
})