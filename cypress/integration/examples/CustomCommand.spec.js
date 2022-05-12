/// <reference types="cypress" />
describe('Custom Command Using', function(){

    it('Login using custom command',function(){
        // positive test
        cy.login('sowad@mailinator.com','XYZabc12345')
        cy.title().should('be.equal','TRIPeGATE - Agent')
        // negative test
        cy.login('sowad@mailinator.com','ABCt12345')
        cy.title().should('be.equal','TRIPeGATE - Agent')
        cy.login('jamal@mailinator.com','XYZabc12345')
        cy.title().should('not.be.equal','TRIPeGATE - Agent') 
    })

    it('Add customer',function(){
        // login script
        cy.login('sowad@mailinator.com','XYZabc12345')
        // script for adding customer-----------------------
        cy.log('Adding customer.........')
    })

    it('Delete customer',function(){
        // login script
        cy.login('sowad@mailinator.com','XYZabc12345')
        // script for delete customer-----------------------
        cy.log('Delete customer.........')
    })
})