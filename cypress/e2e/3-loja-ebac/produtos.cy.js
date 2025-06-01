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
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', produto)
        
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Oslo Trek Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Purple', qtd )

        cy.get('.woocommerce-message').should('contain', qtd + ' × “Oslo Trek Hoodie” foram adicionados no seu carrinho.')
        
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[3].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[3].tamanho, 
            dados[3].cor, 
            dados[3].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[3].nomeProduto)
        })

   
    });
});



