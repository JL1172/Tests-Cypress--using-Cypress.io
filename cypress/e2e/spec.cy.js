const fl = ["fname","lname"];
describe('My first test', () => {
  it('visits the page, clicks on login, verifies URL', () => {
    cy.visit('http://localhost:3000/')
    cy.wait(1000).get("[data-cy = 'login']").click();
    cy.url().should('include', "/form")
  })
})

describe("My second test", () => {
    it("Runs a 'first or last name must be 3 characters or more' error", () => {
      cy.visit('http://localhost:3000/form')
      fl.map(n=> {
         cy.get(`[data-cy = ${n}`).type("ja")
         cy.get(`[data-cy = ${n}Err]`).should("have.text", `*${n === "lname" ? "Last" : "First"} name must be 3 characters or more`)
      })
    })
    it("Runs a 'Must be letters' error", () => {
      cy.visit('http://localhost:3000/form')
      fl.map(n=> {
        cy.get(`[data-cy = ${n}`).type("jacob?")
        cy.get(`[data-cy = ${n}Err]`).should("have.text", `*Must only be letters`)
     })
    })
    it("Runs a First or Last name is required error", ()=> {
      cy.visit("http://localhost:3000/form")
      fl.map(n=> {
        cy.get(`[data-cy = ${n}]`).type("jacob")
        cy.get(`[data-cy = ${n}Err]`).should("not.exist")
        cy.get(`[data-cy = ${n}]`).type("jacob").clear();
        cy.get(`[data-cy = ${n}Err]`).should("have.text", `${n ==="fname" ? "*First name is required" : "*Last name is required"}`)
      })
    })
    it("Responds with no error message", () => {
      cy.visit('http://localhost:3000/form')
      fl.map(n=> {
        cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
        cy.get(`[data-cy = ${n}Err]`).should("not.exist")
     })
    })
  })
  //!done with first name