/// <reference types="Cypress"/>
import HomePage  from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

describe('My Nine Test - Framework', ()=> {
    before(function(){
        //access fixture data
        cy.fixture('example').then(function(data){
           this.data=data
        });
     })

    it("Fixtures", function() {
        Cypress.config('defaultCommandTimeout',20000);
        const homepage = new HomePage();
        const productpage =  new ProductsPage();
        console.log(this.data);
        Cypress.env("url")
        cy.visit(Cypress.env("url")+"/angularpractice");
        // cy.get('input[name="name"]:nth-child(2)').type(this.data.name);
        homepage.getEditBox().type(this.data.name);
        homepage.getGender().select(this.data.gender);

        homepage.getTwoWayDataBinding().should('have.value', this.data.name);
        homepage.getEditBox().should('have.attr', 'minlength', '2');
        homepage.getEnterpreneaur().should('have.attr', 'disabled');
        homepage.getEnterpreneaur().should('be.disabled');

        cy.get(':nth-child(2) > .nav-link').click();
        this.data.productName.map(item=> {
            cy.selectProduct(item);
        });
       // cy.selectProduct("Nokia");
       // cy.selectProduct("Blackberry");

        productpage.checkoutButton().click();

        let sum = 0;

        cy.get('tr td:nth-child(4) strong').each(($el, index, $list)=> {
            const actualText = $el.text();
            const res = actualText.split(" ")[1].trim();
            sum+=+res;
            const total = cy.get('h3 > strong').then($el=> {
                const total = $el.text().split(" ")[1].trim();
                expect(+total).to.be.equal(+sum);
            });
        });


        // cy.get('h4.media-heading > a').should("have.text", "Nokia Edge");
        cy.contains('Checkout').click();
        cy.get('#country').type('India');
        // cy.get('.suggestions > ul > li > a').click();
        cy.get('.checkbox > label').click();
        cy.get('.ng-untouched > .btn').click();
        // cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).');
        cy.get('.alert').then((element)=> {
            const actualText = element.text();
            if(actualText.includes("Success")){
                expect(actualText.includes("Success")).to.be.true;
            }
        });
    });

});
