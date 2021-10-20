import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
function searchAndClickViewAll(itemName){
    cy.get('.r-bh-search-input').click().type(itemName).wait(2000)
    cy.get('.r-buttoncta').contains('View All').click({force:true})}

Given('I open Quicksilver homepage', ()=>
{
    cy.visit("https://www.quiksilver.com/")   
    cy.get('#geolocation-popup').contains('us').click()
})

When('I search for leather belts', ()=>
{
    searchAndClickViewAll('leather belts')
    cy.get(' .producttileinner').should('have.length', 10)
    cy.scrollTo('center')
    cy.get('div:nth-of-type(1) > .producttileinner').click()
    cy.get('.emptyswatch > .swatchanchor > img').click().wait(2000)
    cy.get('.r-dropdown-sizes-init').click()
    cy.get('.r-swatchesdisplay-sizes-container > :nth-child(4) > .swatchanchor').click().wait(3000)
})

When('I Add belt to cart', ()=>
{
    cy.get('.add-to-cart-btn').click()
    cy.get('.r-bh-panel-wrapper > .r-minicart-resume-container > .r-buttonscta > :nth-child(2) > .link2cart').click()
})

Then('I verify quantity and url', ()=>
{
    cy.url().should('include','https://www.quiksilver.com/cart/')
    cy.get('.cart__list__header ').should('contain', "Cart (1)") 
})

When("I search for Men's Hoodies", ()=>
{
    cy.get('.r-bh-search-input').click().type('Mens H').wait(2000)
    cy.get('.r-bh-panel-wrapper').contains("Men's Hoodies").click({force:true}) 
    cy.get('.r-bh-panel-wrapper').should('not.be.visible')
    cy.get('.isproductgrid')
    cy.get('#productresultarea > div.isproductgrid > div:nth-child(1)').click()
    cy.get('.r-dropdown-sizes-init').click()
    cy.get('.r-swatchesdisplay-sizes-container > :nth-child(3)').click()
    cy.wait(3000)
})

Then('I add second item to cart', ()=>
{
    cy.get('.add-to-cart-btn').click()    
})

When('I search for beanie',()=>
{
    searchAndClickViewAll('beanie')    
    cy.get('.refinement-box-values > ul > .swatch-gris ').click().wait(2000)
    cy.get('div:nth-of-type(1) > .producttileinner ').click()
    cy.get('.r-dropdown-sizes-init').click()
    cy.get('.r-swatchesdisplay-sizes-container').click()
})

When('I add item to cart',()=>
{
    cy.wait(3000)
        cy.get('.add-to-cart-btn').click()
})

When('I increase the quantity to three',()=>
{
    cy.get('.r-buttonscta > :nth-child(2)').contains('Cart (1)').click()
    for(let n = 0; n < 2; n ++){
        cy.get('.plus')
          .click()
}
})

Then('I check the quantity in cart',()=>
{
    cy.get('.cart__list__header ').should('contain', "Cart (3)")
})


