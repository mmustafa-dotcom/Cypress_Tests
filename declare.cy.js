describe('Login functionality', () => {
  beforeEach(() => {
    cy.visit('https://new.e-taxes.gov.az/eportal/az/login/pin')
  });
  
  it('Successful Login with Valid Credentials', () => {
    cy.get('[data-testid="loginPageFieldPin"]').type("27M051X") 
    cy.get('[data-testid="loginPageNumber"]').type("505399992")
    cy.get('[data-testid="loginPageSignInButton"]').should('be.enabled').click()
    cy.url().should('include', 'verification')
    cy.contains('05399992').should('be.visible')
  })


  it('Login with Invalid Mobile Number', () => {
    cy.get('[data-testid="loginPageFieldPin"]').type("27M051X") 
    cy.get('[data-testid="loginPageNumber"]').type("885399992")
    cy.get('[data-testid="loginPageSignInButton"]').should('be.enabled').click()
    cy.get('#authenticationPinCardAlertMessage').should('be.visible').should('contain', 'Sorğu məlumatları yalnışdır.')
  })
})