describe('test logon url', function () {
  beforeEach(function () {
    cy.fixture('testdata').then(testdata =>{
      this.testdata = testdata
    })
    
  })

  it('visit url', function(){
    cy.visit(this.testdata.url);
    cy.get('#onetrust-accept-btn-handler').click()
  })

  it('verificate title', function(){
    cy.title().should('eq',this.testdata.title);
  })


  it('login', function(){
    cy.get('.login__form > [data-testid="input-email"] > [data-testid="input-style"]').type(this.testdata.user);
    cy.get('[data-testid="input-password"] > [data-testid="input-style"]').type(this.testdata.pass);
    cy.get('[data-testid="login-button"]').click();
    
  })
})

