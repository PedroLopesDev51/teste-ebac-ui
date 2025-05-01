/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('funcionalidade: Produtos', () => {
   
    beforeEach(() => {
        produtosPage.visitarUrl()
    });
   
    it('Deve selecionar um produto da lista', () => {
            produtosPage.buscarProdutoLista('Aether Gym Pant')
                 cy.get('#tab-title-description > a') .should('contain', 'Descrição')

        
    })

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
        
    });

    it('Deve visitar a pagina do produto', () => {
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        
    });
});



