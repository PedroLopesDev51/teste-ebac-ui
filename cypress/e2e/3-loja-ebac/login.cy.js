/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
    cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')   
    });

    afterEach(() => {
     cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {  
        cy.get('#username').type('tezteebac@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, tezteebac ')
    })

    it('Deve exibir uma mensagem de erro ao insrir usuário inválido', () => {
        cy.get('#username').type('caio@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    });

    it('Deve exibir uma mensagem de erro ao iserir senha inválida', () => {
        cy.get('#username').type('tezteebac@gmail.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail tezteebac@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });

})