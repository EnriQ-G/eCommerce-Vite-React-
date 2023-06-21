describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01- Arrange: Setup del estado de mi configuración
    cy.visit('/')
    // 02- Act: Interacturar con la aplicación
    cy.get('h1')
      .contains('Home')
  })

  it('Quiero probar Login como Costumer', () => {
    // Lo uso para saber cuando una llamada a APi es resuelta, y puedo esperarla usando wait
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01- Arrange: Setup del estado de mi configuración
    cy.visit('/login')
    // 02- Act: Interacturar con la aplicación
    // cy.get('input[name="email"]').type('drstrange@marvel.com')
    // cy.get('input[name="password"]').type('multiverso')
    // cy.get('button[type="submit"]').click()
    cy.doLogin('drstrange@marvel.com', 'multiverso')

    cy.wait('@login')
    cy.get('h1').contains('Dashboard')
  })

  it('Cuando haga logout como admin me lleve a la pagina de Home', () => {
    // Lo uso para saber cuando una llamada a APi es resuelta, y puedo esperarla usando wait
    cy.intercept('POST', 'http://localhost:3000/login').as('login')
    // 01- Arrange: Setup del estado de mi configuración
    cy.visit('/login')
    // 02- Act: Interacturar con la aplicación
    // cy.get('input[name="email"]').type('superman@dc.com')
    // cy.get('input[name="password"]').type('superman')
    // cy.get('button[type="submit"]').click()
    cy.doLogin('superman@dc.com', 'superman')
    cy.wait('@login')
    cy.get('h1').contains('Dashboard')
    cy.get('nav > ul > li:last').click()
    cy.get('hi').contains('Home')
  })
})
