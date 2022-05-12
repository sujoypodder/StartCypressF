describe('Test suite', function(){
    it('Title verify Positive',function(){
        cy.visit('https://www.ebay.com/')
        cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay')
    })
    it('Title verify Negative',function(){
        cy.visit('https://www.ebay.com/')
        cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More')
    })
})