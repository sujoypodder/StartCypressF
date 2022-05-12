/// <reference types="cypress" />
describe('GUI elements test', function(){
    it('Verify check box',function(){
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should('eq','Register') // Title verify register page

        cy.get('.nav > :nth-child(3) > a').click()
        cy.title().should('eq','Web Table') // Title verify web table page

        cy.go('back')
        cy.title().should('eq','Register') // Title verify register page

        cy.go('forward')
        cy.title().should('eq','Web Table') // Title verify web table page

        cy.go(-1)
        cy.title().should('eq','Register') // Title verify register page

        cy.go(1)
        cy.title().should('eq','Web Table') // Title verify web table page
    })   
})