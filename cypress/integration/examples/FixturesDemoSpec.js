/// <reference types="cypress" />
describe('Fixtures-Test data', function(){
    before(() => {
        cy.fixture('example').then(function(data){
            this.data=data
        })
      })

    it('Login data using fixture',function(){
        cy.visit('http://tripegate-b2b-vue.s3-website-ap-southeast-1.amazonaws.com/')
        cy.get('#input-71').type(this.data.user) // email
        cy.get('#input-73').type(this.data.pass) // pass
        cy.get('.col-md-2 > .white--text > .v-btn__content').click() // sign in
    })
})