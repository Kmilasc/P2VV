describe('Add Products to Cart Test', () => {
    it('Should add products to the cart and verify cart summary', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.get('.inventory_item').should('have.length', 6);
  
      cy.get('button[data-test^="add-to-cart-"]').each(($btn, index, $list) => {
        cy.wrap($btn).click();
  
        cy.get('.shopping_cart_badge').should('contain', index + 1);
      });
  
  
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 6); 
    });
  });