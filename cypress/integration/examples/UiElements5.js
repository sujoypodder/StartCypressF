/// <reference types="cypress" />
describe('Handling table', function(){
    it('Table test',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')

        // check value presence anywhere in table
        cy.get('#HTML1').contains('td','Learn Selenium').should('be.visible')
        //cy.get('table[name=BookTable]')

        // check value presence in specific row and column
        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Selenium').should('be.visible')

        // verify the book name is master in java whose author is Amod
        cy.get('tbody > :nth-child(6) > :nth-child(2)').each($e1, index, $list => {
        const text=$e1.text()
        if(text.includes("Amod"))
        {
            cy.get('tbody > :nth-child(6) > :nth-child(2)').eq(index).then(function(bname)
            {
                const bookName= bname.text()
                expect(bookName).to.equal("Master In Java")
            })
        }
        })

        
    })
})