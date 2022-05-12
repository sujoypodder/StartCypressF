/// <reference types="cypress" />
it('InputText Action', function(){
    cy.visit('https://www.ebay.com/')
    cy.get('#gh-ac').type('laptop{enter}')
    cy.contains('gaming laptop').click()
    //cy.get('#gh-ac').type('laptop{enter}')--input text and enter
    //cy.get('#gh-ac').type('laptop').click()--input text and click
    //cy.contains('gaming laptop').click()--access element with text
    //cy.get('#gh-ac').type('Laptop')--input text
    //cy.get('#gh-ac').click()--button/element click
    //cy.get('#gh-ac',{timeout:6000}).type('Laptop{enter}')--custome timeout
    //cy.wait(4000)--custome timeout
    // For global timeout you need to go and set in the cypress.json "defaultCommandTimeout":5000"
    
})