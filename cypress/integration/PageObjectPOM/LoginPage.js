/// <reference types="Cypress"/>
class LoginPage{

    visit(){
        cy.visit('http://tripegate-b2b-vue.s3-website-ap-southeast-1.amazonaws.com/')
    }

    dataEmail(value){
        const field=cy.get('#input-71')
        field.clear()
        field.type(value)
        return this
    }

    dataPass(value){
        const field=cy.get('#input-73')
        field.clear()
        field.type(value)
        return this
    }

    submit(){
        const button=cy.get('.col-md-2 > .white--text > .v-btn__content')
        button.click()
    }
}

export default LoginPage