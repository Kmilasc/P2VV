describe('Login and Navigation Test', () => {
  it('Should login and navigate', () => {

    cy.visit('https://www.saucedemo.com/');


    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');

    cy.get('#react-burger-menu-btn').click();
    cy.get('#inventory_sidebar_link').click();
    cy.url().should('include', '/inventory.html');

    cy.get('.inventory_item').should('have.length', 6);
    cy.get('.shopping_cart_link').click();
    cy.url().should('include', '/cart.html');
  });
});