describe('My First Test', ()=> {
    it("Does do not match", ()=> {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type("ca");
        cy.wait(200);

        // Parent chaining
        cy.get('.products').as('productLocator');
        
        cy.get('.product:visible').should('have.length',4);
        cy.get('@productLocator').find('.product').should('have.length',4);


        cy.get('@productLocator').find('.product').eq(2).contains("ADD TO CART").click();
        cy.get('@productLocator').find('.product').each(($el, index, $list)=> {
            const textVeg = $el.find('h4.product-name').text();

            if(textVeg.includes("Cashews")){
                cy.wrap($el).find("button").click();
            }
        });

        cy.get('.brand').should('have.text', 'GREENKART').then((el)=> {
            cy.log(el);
        });

        cy.get('.brand').then((logoelement)=> {
            cy.log(logoelement.text());
        })
        


    })
});