describe("Login Test Suite", function(){
  it("Login the User", function(){
    cy.visit("/")
    cy.get('svg[data-testid="MenuIcon"]').first().click();
    cy.get('.css-y28f86 > .MuiPaper-root > .css-ebgyk6 > .MuiButton-root').click()
    //cy.contains('Login').first().click({force:true})
  })
})