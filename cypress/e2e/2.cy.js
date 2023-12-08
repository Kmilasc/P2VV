describe('Product Catalog Test', () => {
    it('Checks all products are correctly listed with correct information', () => {
      cy.visit('https://www.saucedemo.com/inventory.html');
  
      // Verificar se todos os produtos estão corretamente listados
      cy.get('.inventory_item').should('have.length', 6);
  
      // Verificar as informações de cada produto
      cy.get('.inventory_item').each(($el) => {
        cy.wrap($el).find('.inventory_item_img').should('be.visible').and('have.attr', 'src').and('not.be.empty');
        cy.wrap($el).find('.inventory_item_name').should('exist').and('not.be.empty');
        cy.wrap($el).find('.inventory_item_price').should('exist').and('not.be.empty');
        // Adicione verificações adicionais conforme necessário
      });
    });
  });