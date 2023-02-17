describe('Test Add Customer kasirAja', () => {
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

  it('success add customer with valid input', () => {
    cy.contains("pelanggan").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("new customer")
    cy.get('input[id="no.hp"]').type("089988776655")
    cy.get('#alamat').type("bantul")
    cy.get('#keterangan').type("tes new customer")
    cy.contains("simpan").click()

    // should be redirected to /customers
    cy.url().should('include', '/customers')
    
    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
  })

  it('cannot add customer without input name of customer', () => {
    cy.contains("pelanggan").click()
    cy.contains("tambah").click()
    cy.get('input[id="no.hp"]').type("089988776655")
    cy.get('#alamat').type("bantul")
    cy.get('#keterangan').type("tes new customer")
    cy.contains("simpan").click()

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
  })

  it('cannot add customer with invalid phone number format', () => {
    cy.contains("pelanggan").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("new customer")
    cy.get('input[id="no.hp"]').type("tes no hp")
    cy.contains("simpan").click()

    // should display alert "phone" must be a number
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"phone" must be a number')
  })

  it('cannot add customer without any input', () => {
    cy.contains("pelanggan").click()
    cy.contains("tambah").click()
    cy.contains("simpan").click()

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
  })
})