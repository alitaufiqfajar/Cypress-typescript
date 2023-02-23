export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }
    
    sauceLabsBackpackAddToCart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.get('.shopping_cart_link').should('be.empty')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
    }

    sauceLabsBackpackRemoveFromCart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.get('.shopping_cart_link').should('be.empty')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_badge').should('have.text', '1')
        cy.get('.shopping_cart_link').click()
        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').should('be.empty')
    }
}