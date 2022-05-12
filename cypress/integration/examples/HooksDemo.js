/// <reference types="cypress" />
describe('Hooks concept', function(){

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.log('***********This is setup block********')
      })
      
      beforeEach(() => {
        // root-level hook
        // runs before every test block
        cy.log('***********This is login block********')
      })
      
      afterEach(() => {
        // runs after each test block
        cy.log('***********This is logout block********')
      })
      
      after(() => {
        // runs once all tests are done
        cy.log('***********This is teardown block********')
      })

    it('Search',function(){
        cy.log('***********This is searching test********')
    })

    it('Advanced search',function(){
        cy.log('***********This is advanced searching test********')
    })

    it('Listing products',function(){
        cy.log('***********This is listing product test********')
    })
})