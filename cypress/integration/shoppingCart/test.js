describe('Quicksilver Shop', function () {
    beforeEach('Quicksilver Shop', function () { 
        cy.visit("https://www.quiksilver.com/")   
        cy.get('#geolocation-popup').contains('us').click()
    })

    it('TC_1 Verify if 1 item was added to the cart', function () {
        searchAndClickViewAll('leather belts')
        cy.get(' .producttileinner').should('have.length', 5)
        cy.scrollTo('center')
        cy.get('div:nth-of-type(1) > .producttileinner').click()
        cy.get('.emptyswatch > .swatchanchor > img').click().wait(2000)
        cy.get('.r-dropdown-sizes-init').click()
        cy.get('.r-swatchesdisplay-sizes-container > :nth-child(4) > .swatchanchor').click().wait(3000)
        cy.get('.add-to-cart-btn').click()
        cy.get('.r-bh-panel-wrapper > .r-minicart-resume-container > .r-buttonscta > :nth-child(2) > .link2cart').click()

        cy.url().should('include','https://www.quiksilver.com/cart/')
        cy.get('.cart__list__header ').should('contain', "Cart (1)")    
    })

    it('TC2_Add Second item to cart', function () { 
        cy.get('.r-bh-search-input').click().type('Mens H').wait(2000)
        cy.get('.r-bh-panel-wrapper').contains("Men's Hoodies").click({force:true}) 
        cy.get('.r-bh-panel-wrapper').should('not.be.visible')
        cy.get('.isproductgrid')
        cy.get('#productresultarea > div.isproductgrid > div:nth-child(1)').click()
        cy.get('.r-dropdown-sizes-init').click()
        cy.get('.r-swatchesdisplay-sizes-container > :nth-child(3)').click()
        cy.wait(3000)
        cy.get('.add-to-cart-btn').click()    
    })

    it('TC_3 Add multiple items to cart', function () {
        searchAndClickViewAll('beanie')    
        cy.get('.refinement-box-values > ul > .swatch-gris ').click().wait(2000)
        cy.get('div:nth-of-type(1) > .producttileinner ').click()
        cy.get('.r-dropdown-sizes-init').click()
        cy.get('.r-swatchesdisplay-sizes-container').click()
        cy.wait(3000)
        cy.get('.add-to-cart-btn').click()
        cy.get('.r-buttonscta > :nth-child(2)').contains('Cart (1)').click()
        for(let n = 0; n < 2; n ++){
            cy.get('.plus')
              .click()
        }
        cy.get('.cart__list__header ').should('contain', "Cart (3)")
        
    })
})

function searchAndClickViewAll(itemName){
    cy.get('.r-bh-search-input').click().type(itemName).wait(2000)
    cy.get('.r-buttoncta').contains('View All').click({force:true})
}
