beforeEach(() => {
  cy.login('toko@dwiky.com', 'toko24dwiky')
})

describe('Test Add Category kasirAja', () => {
  it('success add category with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.wait(1000)
    cy.get('a[href="/categories/create"]').click()
    cy.wait(1000)
    cy.get('#nama').type("notebook gaming")
    cy.wait(1000)
    cy.get('#deskripsi').type("notebook gaming")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
    cy.wait(1000)
  })

  it('cannot add category without input name of category', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.wait(1000)
    cy.get('a[href="/categories/create"]').click()
    cy.wait(1000)
    cy.get('#deskripsi').type("notebook gaming")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text', '"name" is not allowed to be empty')
    cy.wait(1000)
  })

  it('cannot add category without any input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.wait(1000)
    cy.get('a[href="/categories/create"]').click()
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text', '"name" is not allowed to be empty')
    cy.wait(1000)
  })

  it('success edit kategori with valid input', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.wait(1000)
    cy.contains('notebook gaming').parent('tr').within(() => {
      cy.get('td').eq(2).click() //untuk mencari button titik 3 di index kolom yang ke 2 (index dimulai dari 0)
      cy.wait(1000)
      cy.contains('a', 'ubah').click()
      cy.wait(1000)
    })
    cy.get('#nama').clear().type("laptop gaming")
    cy.wait(1000)
    cy.get('#deskripsi').clear().type("laptop gaming")
    cy.wait(1000)
    cy.contains('button', 'simpan').click()
    cy.wait(1000)
    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show notification "success item diubah"
    cy.contains("success")
    cy.contains("item diubah")
    cy.wait(1000)
  })

  it('success search kategori', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.wait(1000)
    cy.get('.chakra-input.css-2s2hk4').clear().type('laptop gaming{enter}')
    cy.wait(1000)

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show search for "laptop gaming"
    cy.contains("laptop gaming")
    cy.wait(1000)
  })

  it('success delete kategori', () => {
    cy.visit('/')
    cy.get('a[href="/categories"]').click()
    cy.wait(1000)
    cy.contains('laptop gaming').parent('tr').within(() => {
      cy.get('td').eq(2).click() //untuk mencari button titik 3 di index kolom yang ke 2 (index dimulai dari 0)
      cy.wait(1000)
      cy.contains('button', 'hapus').click()
      cy.wait(1000)
    })
    cy.contains('button', 'Delete').click()
    cy.wait(1000)

    // should be redirected to /categories
    cy.location('pathname').should('eq', '/categories')

    // should show notification "success item dihapus"
    cy.contains("success")
    cy.contains("item dihapus")
    cy.wait(1000)
  })
})