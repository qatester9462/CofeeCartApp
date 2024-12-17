/// <reference types= "cypress" />

import { CoffeePage } from "../PageObject/CoffeePage"

const coffee = new CoffeePage

describe(' Coffee Cases ',function(){
    
    beforeEach(()=>{
        cy.visit('/')
    })

    it('TC_AC_001 Add Coffees from the menu and add payment details to pay',()=>{
        coffee.addMochaToCart()
        coffee.addAmericanoToCart()
        coffee.addFromHowerOnTotal('Mocha')
        coffee.addEspressoToCart()
        coffee.addEspressoToCart()
        coffee.addEspressoToCart()
        coffee.clickYes()
        coffee.clickOnTotal()
        coffee.addPaymentDetails('Qatester','qatester9462@gmail.com')
        coffee.clickSubmitButton()
    })
})