describe('Checkout Process Test', () => {
    it('Should complete the purchase process correctly', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      cy.get('button[data-test^="add-to-cart-"]').first().click();
      
  
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 1);
   
      cy.get('[data-test="checkout"]').click();
  
    
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
  
      
      cy.get('.cart_item').should('have.length', 1);
  
    
      cy.get('[data-test="finish"]').click();
  
     
      cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    });
  });