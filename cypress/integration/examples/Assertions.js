/// <reference types="cypress" />
describe('LearnAssertionDemo', function(){
    it('AssertionTest1',function(){
        cy.visit('https://example.cypress.io/')
        // Implicit assertions
        cy.contains('get').click()
        cy.get('#query-btn')
        .should('contain','Button')
        .should('have.class','query-btn')
        .should('be.visible')
        .should('be.enabled')
        cy.get('#query-btn').invoke('attr','id').should('eq','query-btn')
        cy.get('#query-btn')
        .should('contain','Button'). and('have.class','query-btn')

        // Expliit assertions
        // Expect
        expect(true).to.be.true

        let name= 'Sujoy'
        expect(name).to.be.equal('Sujoy')

        // Assert
        assert.equal(4,4,'Equal ')
        assert.stringEqual(4,5,'not strictly equal')
    })
})