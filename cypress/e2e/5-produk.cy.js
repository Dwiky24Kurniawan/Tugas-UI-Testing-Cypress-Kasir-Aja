beforeEach(() => {
  cy.login('toko@dwiky.com', 'toko24dwiky')
})

describe('Test Add Product kasirAja', () => {
  it('success add product with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.get('a[href="/products/create"]').click()
    cy.get('#nama').clear().type("samsung galaxy s23 ultra")
    cy.get('#deskripsi').clear().type("samsung galaxy s23 ultra")
    cy.get('[id="harga beli"]').clear().type(20000000)
    cy.get('[id="harga jual"]').clear().type(22000000)
    cy.get('#stok').clear().type(10)
    cy.get('#kategori').click()
    cy.get('table').contains('td', 'smartphone').click()
    cy.contains('button', 'simpan').click()

    // should be redirected to /products
    cy.location('pathname').should('eq', '/products')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
  })

  it('cannot add product without input product name', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.get('a[href="/products/create"]').click()
    cy.get('#deskripsi').clear().type("samsung galaxy s23 ultra")
    cy.get('[id="harga beli"]').clear().type(20000000)
    cy.get('[id="harga jual"]').clear().type(22000000)
    cy.get('#stok').clear().type(10)
    cy.get('#kategori').click()
    cy.get('table').contains('td', 'smartphone').click()
    cy.contains('button', 'simpan').click()

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"name" is not allowed to be empty')
  })

  it('cannot add product without input product cost', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.get('a[href="/products/create"]').click()
    cy.get('#nama').clear().type("samsung galaxy s23 ultra")
    cy.get('#deskripsi').clear().type("samsung galaxy s23 ultra")
    cy.get('[id="harga jual"]').clear().type(22000000)
    cy.get('#stok').clear().type(10)
    cy.get('#kategori').click()
    cy.get('table').contains('td', 'smartphone').click()
    cy.contains('button', 'simpan').click() 

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"cost" must be greater than 0')    
  })

  it('cannot add product without input product price', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()   
    cy.get('a[href="/products/create"]').click()   
    cy.get('#nama').clear().type("samsung galaxy s23 ultra") 
    cy.get('#deskripsi').clear().type("samsung galaxy s23 ultra")
    cy.get('[id="harga beli"]').clear().type(20000000)
    cy.get('#stok').clear().type(10)
    cy.get('#kategori').click()
    cy.get('table').contains('td', 'smartphone').click()
    cy.contains('button', 'simpan').click()

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"price" must be greater than ref:cost')
  })

  it('cannot add product without select category', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.get('a[href="/products/create"]').click()
    cy.get('#nama').clear().type("samsung galaxy s23 ultra")
    cy.get('#deskripsi').clear().type("samsung galaxy s23 ultra")
    cy.get('[id="harga beli"]').clear().type(20000000)
    cy.get('[id="harga jual"]').clear().type(22000000)
    cy.get('#stok').clear().type(10)
    cy.contains('button', 'simpan').click()

    // should display alert "name" is not allowed to be empty
    cy.get('div[role="alert"]').should('have.text', '"category_id" is required')
  })

  it('success edit product with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.contains('samsung galaxy s23 ultra').parent('tr').within(() => {
      cy.get('td').eq(9).click() //untuk mencari button titik 3 di index kolom yang ke 9 (index dimulai dari 0)
      cy.contains('a', 'ubah').click()
    })
    cy.get('#nama').clear().type("samsung galaxy s23 ultra")
    cy.get('#deskripsi').clear().type("samsung galaxy s23 ultra")
    cy.get('[id="harga beli"]').click().clear().type(20000000)
    cy.get('[id="harga jual"]').click().clear().type(25000000)
    cy.get('#stok').click().clear().type(15)
    cy.get('#kategori').click()
    cy.get('table').contains('td', 'smartphone').click()
    cy.contains('button', 'simpan').click()
    
    // should be redirected to /products
    cy.location('pathname').should('eq', '/products')

    // should show notification "success item diubah"
    cy.contains("success")
    cy.contains("item diubah")
    
  })

  it('success search product', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.get('.chakra-input.css-2s2hk4').clear().type('samsung galaxy{enter}')
  
    // should be redirected to /categories
    cy.location('pathname').should('eq', '/products')

    // should show search for "dwiky"
    cy.contains("samsung galaxy")
  })

  it('success filter product by category', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.get('.chakra-input.css-r3uri8').click()
    cy.get('table').contains('td', 'smartphone').click({ force: true })

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/products')

    // should show search for "dwiky"
    cy.contains("samsung galaxy")
  })

  it('success delete product', () => {
    cy.visit('/')
    cy.get('a[href="/products"]').click()
    cy.contains('samsung galaxy s23 ultra').parent('tr').within(() => {
      cy.get('td').eq(9).click() //untuk mencari button titik 3 di index kolom yang ke 9 (index dimulai dari 0)
      cy.contains('button', 'hapus').click()
    })
    cy.contains('button', 'Delete').click()

    // should be redirected to /products
    cy.location('pathname').should('eq', '/products')

    // should show notification "success item dihapus"
    cy.contains("success")
    cy.contains("item dihapus")
  })
})