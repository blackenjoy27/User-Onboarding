describe("User-Onboarding App", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })
    const nameInput = ()=> cy.get('input[name="name"]');
    const emailInput = ()=>cy.get('input[name="email"]');
    const password1Input =()=>cy.get('input[name="password1"]');
    const password2Input =()=>cy.get('input[name="password2"]');
    const checkBox = ()=>cy.get('input[type="checkbox"]');
    const submitButton = ()=> cy.get('button[id="b1"]');
    it("Type an name", ()=>{
        nameInput().type("Kyle").should("have.value","Kyle");
    })
    it("Type an email",()=>{
        emailInput().type("xiaohaha237@gmail.com").should("have.value","xiaohaha237@gmail.com");
    })
    it("Type an Password", ()=>{
        password1Input().type("thugstools").should("have.value","thugstools");
        password2Input().type("thugstools").should("have.value","thugstools");
    })
    it("The checkbox is clickable", ()=>{
        checkBox().click().should("be.checked");
    })
    it("Can submit an data", ()=>{
        nameInput().type("Kyle");
        emailInput().type("xiaoha@gmail.com");
        password1Input().type("waasdada");
        password2Input().type("waasdada");
        checkBox().click();
        submitButton().click();
        nameInput().should("have.value",'');
        emailInput().should("have.value",'');
        password1Input().should("have.value",'');
        password2Input().should("have.value",'');
        checkBox().should("not.be.checked");
    })
})

