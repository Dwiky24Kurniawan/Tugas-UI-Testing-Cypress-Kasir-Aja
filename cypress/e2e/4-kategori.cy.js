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

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
  })

  it('cannot add category without input name', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.get('a[href="/categories/create"]').click()
    cy.get('#deskripsi').type("notebook gaming")
    cy.contains('button', 'simpan').click()

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text', '"name" is not allowed to be empty')  
  })

  it('cannot add category without any input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.get('a[href="/categories/create"]').click()
    cy.contains('button', 'simpan').click()   

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text', '"name" is not allowed to be empty') 
  })

  it('success edit kategori with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.contains('notebook gaming').parent('tr').within(() => {
      cy.get('td').eq(2).click() //untuk mencari button titik 3 di index kolom yang ke 2 (index dimulai dari 0)   
      cy.contains('a', 'ubah').click() 
    })
    cy.get('#nama').clear().type("laptop gaming")   
    cy.get('#deskripsi').clear().type("laptop gaming") 
    cy.contains('button', 'simpan').click()
    
    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show notification "success item diubah"
    cy.contains("success")
    cy.contains("item diubah")   
  })

  it('success search kategori', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()   
    cy.get('.chakra-input.css-2s2hk4').clear().type('laptop gaming{enter}')   

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show search for "laptop gaming"
    cy.contains("laptop gaming")    
  })

  it('success delete kategori', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()    
    cy.contains('laptop gaming').parent('tr').within(() => {
      cy.get('td').eq(2).click() //untuk mencari button titik 3 di index kolom yang ke 2 (index dimulai dari 0)
      cy.contains('button', 'hapus').click()
    })
    cy.contains('button', 'Delete').click()

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show notification "success item dihapus"
    cy.contains("success")
    cy.contains("item dihapus")
  })
})