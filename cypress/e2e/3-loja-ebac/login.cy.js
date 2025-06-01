/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit ('minha-conta/')   
    });

    afterEach(() => {
     cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {  
        cy.get('#username').type('tezteebac@gmail.com')
        cy.get('#password').type('12345')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
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

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')        
    });

    it('Deve fazer login com sucesso usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha, { log:false }) // log false faz com que nao apareca o nome do usuario ou senha no teste
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')    

        })
        
    });

    it.only('deve fazer login com sucesso -  usando comandos costumizado ', () => {
        cy.login('tezteebac@gmail.com', '12345')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        
        
        
    });

});
