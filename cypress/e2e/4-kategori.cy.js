beforeEach(() => {
  cy.login('toko@dwiky.com', 'toko24dwiky')
})

describe('Test Add Category kasirAja', () => {
  it('success add category with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.get('a[href="/categories/create"]').click()
    cy.get('#nama').type("notebook gaming")
    cy.get('#deskripsi').type("notebook gaming")
    cy.contains('button', 'simpan').click()

    cy.location('pathname').should('eq', '/categories')

    cy.contains("success")
    cy.contains("item ditambahkan")
  })

  it('cannot add category without input name', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.get('a[href="/categories/create"]').click()
    cy.get('#deskripsi').type("notebook gaming")
    cy.contains('button', 'simpan').click()

    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')  
  })

  it('cannot add category without any input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.get('a[href="/categories/create"]').click()
    cy.contains('button', 'simpan').click()   

    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
  })

  it('success edit kategori with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.contains('notebook gaming').parent('tr').within(() => {
      cy.get('td').eq(2).click()
      cy.contains('a', 'ubah').click() 
    })
    cy.get('#nama').clear().type("laptop gaming")   
    cy.get('#deskripsi').clear().type("laptop gaming") 
    cy.contains('button', 'simpan').click()
    
    cy.location('pathname').should('eq', '/categories')

    cy.contains("success")
    cy.contains("item diubah")   
  })

  it('success search kategori', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()   
    cy.get('.chakra-input.css-2s2hk4').clear().type('laptop gaming{enter}')   

    cy.location('pathname').should('eq', '/categories')

    cy.contains("laptop gaming")    
  })

  it('success delete kategori', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()    
    cy.contains('laptop gaming').parent('tr').within(() => {
      cy.get('td').eq(2).click()
      cy.contains('button', 'hapus').click()
    })
    cy.contains('button', 'Delete').click()

    cy.location('pathname').should('eq', '/categories')

    cy.contains("success")
    cy.contains("item dihapus")
  })
})