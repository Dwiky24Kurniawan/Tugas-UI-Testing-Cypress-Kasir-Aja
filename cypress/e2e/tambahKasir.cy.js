describe('Test Add User (Cashier) kasirAja', () => {
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

  it('success create users cashier with valid input', () => {
    cy.contains("pengguna").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.get('#password').type("kasirbaru")
    cy.contains("simpan").click()

    // should be redirected to /users
    cy.url().should('include', '/users')

    // should show notification "success item ditambahkan"
    cy.contains("success")
    cy.contains("item ditambahkan")
  })

  it('cannot create users cashier without input name of users (cashier)', () => {
    cy.contains("pengguna").click()
    cy.contains("tambah").click()
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.get('#password').type("kasirbaru")
    cy.contains("simpan").click()

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
  })

  it('cannot create users cashier without input email', () => {
    cy.contains("pengguna").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#password').type("kasirbaru")
    cy.contains("simpan").click()

    // should display alert "email" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"email" is not allowed to be empty')
  })

  it('cannot create users cashier with invalid email format', () => {
    cy.contains("pengguna").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#email').type("kasirbaru@tokodwiky")
    cy.get('#password').type("kasirbaru")
    cy.contains("simpan").click()

    // should display alert "email" must be a valid email
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"email" must be a valid email')
  })

  it('cannot create users cashier without input password', () => {
    cy.contains("pengguna").click()
    cy.contains("tambah").click()
    cy.get('#nama').type("kasir baru dwiky")
    cy.get('#email').type("kasirbaru@tokodwiky.com")
    cy.contains("simpan").click()

    // should display alert "password" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"password" is not allowed to be empty')
  })

  it('cannot create users cashier without any input', () => {
    cy.contains("pengguna").click()
    cy.contains("tambah").click()
    cy.contains("simpan").click()

    // should display alert "name" is not allowed to be empty
    cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
  })
})