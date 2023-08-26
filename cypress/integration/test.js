let url = "https://www.oysho.com/es/logon/"
let title = 'Iniciar Sesión | OYSHO España / Spain'
let user = "borjaarenas@yopmail.com";
let pass = 123456;


describe('test logon url', function () {
  beforeEach(function () {
    cy.visit(url);
    cy.get('#onetrust-accept-btn-handler').click()
  })

  it('verificate title', function(){
    cy.title().should('eq',title);
  })


  it('login', function(){
    cy.get('.login__form > [data-testid="input-email"] > [data-testid="input-style"]').type(user);
    cy.get('[data-testid="input-password"] > [data-testid="input-style"]').type(pass);
    cy.get('[data-testid="login-button"]').click();
    
  })
})

