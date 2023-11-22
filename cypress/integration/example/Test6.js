describe('My Sixth Test - tables', ()=> {
    it("Checkboxes", ()=> {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('fieldset > #product tr td:nth-child(2)').each(($e1,index, $list)=> {
            const text = $e1.text();

            if(text.includes("Python")){
                cy.get("fieldset > #product tr td:nth-child(2)").eq(index).next().then(price => {
                    const priceText = price.text()
                    expect(Number.parseInt(priceText)).to.equal(25);
                })
            }
        })

    });

});