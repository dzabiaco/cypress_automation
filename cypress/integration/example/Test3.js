describe('My Third Test', ()=> {
    it("Checkboxes", ()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Checkboxes
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1');
        cy.get('input[type="checkbox"]').check(["option2", "option3"]);
    });

    it("Dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Dropdown
        cy.get('select').select('option2').should('have.value','option2');
    });

    it("Dynamic dropdown", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Dynamic Dropdown
        cy.get("#autocomplete").type("ind");
        cy.get(".ui-menu-item div").each(($el,index,$list)=> {
            if($el.text() === "India"){
                $el.click();
            }
        });
        cy.get('#autocomplete').should('have.value', 'India');
    });

    it("Hidden Elements", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

         cy.get('#displayed-text').should('be.visible');
         cy.get('#hide-textbox').click();
         cy.get('#displayed-text').should('not.be.visible');
         cy.get("#show-textbox").click();
         cy.get('#displayed-text').should('be.visible');
    });

    it("Radio buttons", ()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('[for="radio1"] > .radioButton').check().should('have.value', 'radio1');
    });
});