export class CoffeePage {
    addMochaToCart(){
        cy.get("div[aria-label='Mocha']").should('be.visible').click()
    }
    addAmericanoToCart(){
        cy.get("div[aria-label='Americano']").should('be.visible').click()
    }
    addFromHowerOnTotal(coffeName){
        cy.get("button[aria-label='Proceed to checkout']").should('be.visible').trigger('mouseover')
        cy.get('[class="list-item"]').contains(coffeName).eq(0).parents('[class="list-item"]').find("button[aria-label='Add one Mocha']").should('be.visible').click()
    }
    addEspressoToCart(){
        cy.get("div[aria-label='Espresso']").should('be.visible').click()
    }
    clickYes(){
        cy.get('.yes').should('be.visible').click()
    }
    clickOnTotal(){
        cy.get("button[aria-label='Proceed to checkout']").should('be.visible').click()
    }
    addPaymentDetails(userName,email){
        cy.get("div[class='modal-content size'] section h1").should('be.visible').and('contain.text','Payment details')
        cy.get("label[for='name']").should('be.visible').and('contain.text','Name')
        cy.get('#name').should('be.visible').type(userName)
        cy.get("label[for='email']").should('be.visible').and('contain.text','Email')
        cy.get('#email').should('be.visible').type(email)
    }
    clickSubmitButton(){
        cy.get('#submit-payment').should('be.visible').click()
    }
}