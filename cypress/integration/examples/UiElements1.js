/// <reference types="cypress" />
describe('GUI elements test', function(){
    it('Verify input box and radio button',function(){
        cy.visit('http://tripegate-b2b-vue.s3-website-ap-southeast-1.amazonaws.com/')
        cy.url().should('include','tripegate')
        cy.get('#input-71').should('be.visible').should('be.enabled').type('sowad@mailinator.com')
        cy.get('#input-73').should('be.visible').should('be.enabled').type('XYZabc12345')
        cy.get('.col-md-2 > .white--text > .v-btn__content').should('be.visible').click()
        cy.get('.v-app-bar__nav-icon > .v-btn__content > .v-icon').should('be.visible').click()
        cy.get(':nth-child(6) > .v-list-item > .v-list-item__content > .v-list-item__title').should('be.visible').click()
        cy.get('.px-5 > .v-btn__content').should('be.visible').click()
        // Radio Button 
        //cy.get('.mb-0 > .v-label').should('be.visible').should('be.checked')
        cy.get('.v-input--radio-group__input > :nth-child(2)').should('be.visible').should('not.be.checked').click()
        //cy.get('.col > .v-btn > .v-btn__content').should('be.visible').click()
        
    })
})