/// <reference types="cypress" />
describe('GUI elements test', function(){
    it('Verify check box',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        // Check Box
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')
        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')
        cy.get('[type=checkbox]').check(['Cricket','Hockey']) // select common element and put it to an array
    })
    
    it('Select dropdown',function(){
        cy.get('#Skills').select('Android').should('have.value','Android')
    })

    it('Multi select dropdown',function(){
        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Hindi').click() // select common element and click
        //cy.get(':nth-child(21) > .ui-corner-all').click()
    })

    it('Searchable dropdown',function(){
        cy.get('.select2-selection').click({force: true})
        cy.get('.select2-search__field').type('India{enter}')
        
    })
    
})