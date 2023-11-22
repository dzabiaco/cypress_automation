describe('My Fourth Test - Alerts', ()=> {
    it("Checkboxes", ()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        // Checkboxes
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        cy.on("window:alert", (str)=> {
            expect(str).to.equals("Hello , share this practice page and share your knowledge");
        });

        cy.on("window:confirm", (str)=> {
            expect(str).to.equals("Hello , Are you sure you want to confirm?");
        })

    });

});