/// <reference types="cypress" />

import LoginPage from '../PageObjectPOM/LoginPage'

describe('POM TestCase', function(){

    it('Login from pageobjectpattern',function(){
        const lp=new LoginPage()
        lp.visit()
        lp.dataEmail('sowad@mailinator.com')
        lp.dataPass('XYZabc12345')
        lp.submit()
        cy.title().should('be.equal','TRIPeGATE - Agent')
    })

})