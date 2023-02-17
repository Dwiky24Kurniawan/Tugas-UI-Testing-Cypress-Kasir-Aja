describe('Test Add Category kasirAja', () => {
  it('should open login page first', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.url().should('include', '/login')
  })

  it('input valid username dan password then Login', () => {
    cy.visit('https://kasirdemo.belajarqa.com')
    cy.get('#email').type("toko@dwiky.com")
    cy.get('#password').type("toko24dwiky")
    cy.contains("login").click()

    // should be redirected to /dashboard
    cy.url().should('include', '/dashboard')
    cy.contains("kasirAja")
  })

  it('success add category with valid input', () => {
    cy.contains("kategori").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("smartphone")
    cy.get('#deskripsi').type("smartphone")
    cy.contains("simpan").click()

    // should be redirected to /categories
    cy.url().should('include', '/categories')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
  })

  it('cannot add category without input name of category', () => {
    cy.contains("kategori").click()
    cy.contains("tambah").click()
    cy.get('#deskripsi').type("smartphone")
    cy.contains("simpan").click()

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
  })

  it('cannot add category without any input', () => {
    cy.contains("kategori").click()
    cy.contains("tambah").click()
    cy.contains("simpan").click()
    
    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
  })
})