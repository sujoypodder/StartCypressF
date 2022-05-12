/// <reference types="cypress" />
describe('Traveler List Page', function(){
    it('Traveler Create',function(){
        cy.visit('http://tripegate-b2b-vue.s3-website-ap-southeast-1.amazonaws.com/')
        cy.get('#input-71').type('sowad@mailinator.com')
        cy.get('#input-73').type('XYZabc12345')
        cy.get('.col-md-2 > .white--text > .v-btn__content').click()
        cy.get('.v-app-bar__nav-icon > .v-btn__content > .v-icon').click()
        cy.get(':nth-child(6) > .v-list-item > .v-list-item__content > .v-list-item__title').click()
        cy.get('.px-5 > .v-btn__content').click()
        cy.get('.col > .v-btn > .v-btn__content').click()
        //cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay')
    })
})