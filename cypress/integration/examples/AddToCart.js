/// <reference types="cypress" />
describe('Item add to the cart', function(){
    it('addtocart',function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('#small-searchterms').type('Nokia Lumia 1020')
        cy.get('#small-search-box-form > .button-1').click()
        cy.get('.product-box-add-to-cart-button').click()
        cy.get('.cart-label').click()
        cy.get('.qty-input').clear().type('3')
        cy.get('#updatecart').click()
        cy.get('.product-unit-price').contains('$349.00')

        //cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay')
    })
})
