describe('test logon url', function () {
  let testdata;

  before(function () {
    cy.fixture('testdata').then(data => {
      testdata = data;
    });
  });

  beforeEach(function () {
    cy.visit(testdata.url);
    cy.get('#onetrust-accept-btn-handler').click();
  });

  it('verificate title', function () {
    cy.title().should('eq', testdata.title);
  });

  it('login', function () {
    const inputEmailSelector = '.login__form [data-testid="input-email"] [data-testid="input-style"]';
    const inputPasswordSelector = '.login__form [data-testid="input-password"] [data-testid="input-style"]';
    const loginButtonSelector = '[data-testid="login-button"]';

    cy.get(inputEmailSelector).type(testdata.user);
    cy.get(inputPasswordSelector).type(testdata.pass);
    cy.get(loginButtonSelector).click();
  });
});


