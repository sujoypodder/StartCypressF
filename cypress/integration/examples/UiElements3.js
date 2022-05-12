/// <reference types="cypress" />
describe('Handle alert verify', function(){
    /*it('Alert with ok an cancel',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('#HTML9 > .widget-content > button').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a button!')
        }
        )
    })*/
    it('Alert with ok',function(){
        cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get(':nth-child(1) > .analystic').click()
        cy.get('#OKTab > .btn').click()
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('I am an alert box!')
        }
        )
    })

    it('Alert with ok an cancel',function(){
        //cy.visit('http://demo.automationtesting.in/Alerts.html')
        cy.get(':nth-child(2) > .analystic').click()
        cy.get('#CancelTab > .btn').click()
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Press a Button !')
        }
        )
    })
})