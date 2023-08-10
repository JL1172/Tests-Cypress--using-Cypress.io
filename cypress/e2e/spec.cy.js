const array = [
  {
    "name": "Alabama",
    "code": "AL"
  },
  {
    "name": "Alaska",
    "code": "AK"
  },
  {
    "name": "Arizona",
    "code": "AZ"
  },
  {
    "name": "Arkansas",
    "code": "AR"
  },
  {
    "name": "California",
    "code": "CA"
  },
  {
    "name": "Colorado",
    "code": "CO"
  },
  {
    "name": "Connecticut",
    "code": "CT"
  },
  {
    "name": "Delaware",
    "code": "DE"
  },
  {
    "name": "Florida",
    "code": "FL"
  },
  {
    "name": "Georgia",
    "code": "GA"
  },
  {
    "name": "Hawaii",
    "code": "HI"
  },
  {
    "name": "Idaho",
    "code": "ID"
  },
  {
    "name": "Illinois",
    "code": "IL"
  },
  {
    "name": "Indiana",
    "code": "IN"
  },
  {
    "name": "Iowa",
    "code": "IA"
  },
  {
    "name": "Kansas",
    "code": "KS"
  },
  {
    "name": "Kentucky",
    "code": "KY"
  },
  {
    "name": "Louisiana",
    "code": "LA"
  },
  {
    "name": "Maine",
    "code": "ME"
  },
  {
    "name": "Maryland",
    "code": "MD"
  },
  {
    "name": "Massachusetts",
    "code": "MA"
  },
  {
    "name": "Michigan",
    "code": "MI"
  },
  {
    "name": "Minnesota",
    "code": "MN"
  },
  {
    "name": "Mississippi",
    "code": "MS"
  },
  {
    "name": "Missouri",
    "code": "MO"
  },
  {
    "name": "Montana",
    "code": "MT"
  },
  {
    "name": "Nebraska",
    "code": "NE"
  },
  {
    "name": "Nevada",
    "code": "NV"
  },
  {
    "name": "New Hampshire",
    "code": "NH"
  },
  {
    "name": "New Jersey",
    "code": "NJ"
  },
  {
    "name": "New Mexico",
    "code": "NM"
  },
  {
    "name": "New York",
    "code": "NY"
  },
  {
    "name": "North Carolina",
    "code": "NC"
  },
  {
    "name": "North Dakota",
    "code": "ND"
  },
  {
    "name": "Ohio",
    "code": "OH"
  },
  {
    "name": "Oklahoma",
    "code": "OK"
  },
  {
    "name": "Oregon",
    "code": "OR"
  },
  {
    "name": "Pennsylvania",
    "code": "PA"
  },
  {
    "name": "Rhode Island",
    "code": "RI"
  },
  {
    "name": "South Carolina",
    "code": "SC"
  },
  {
    "name": "South Dakota",
    "code": "SD"
  },
  {
    "name": "Tennessee",
    "code": "TN"
  },
  {
    "name": "Texas",
    "code": "TX"
  },
  {
    "name": "Utah",
    "code": "UT"
  },
  {
    "name": "Vermont",
    "code": "VT"
  },
  {
    "name": "Virginia",
    "code": "VA"
  },
  {
    "name": "Washington",
    "code": "WA"
  },
  {
    "name": "West Virginia",
    "code": "WV"
  },
  {
    "name": "Wisconsin",
    "code": "WI"
  },
  {
    "name": "Wyoming",
    "code": "WY"
  }
]
const newArray = [];
const result = array.map(n=> {
  if (n.name) {
    newArray.push(n.name)
  }
  return newArray;
})
const programmingLanguages = [
  "Python",
  "Java",
  "JavaScript",
  "C#",
  "C++",
  "Ruby",
  "Swift",
 " Kotlin",
  "Go (Golang)",
  "Rust",
  "TypeScript",
  "PHP",
  "R",
  "MATLAB",
  "Perl",
  "Scala",
  "Dart",
  "Lua",
  "Groovy",
  "Julia"
]


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
  describe("My third test", ()=> {
    it("Runs a 'username is required error'",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy = 'username']").type("jaco")
      cy.get("[data-cy = 'usernameErr']").should("have.text","*Username must be 5 characters or more")
    })
    it("Runs a 'Username is required' error and verifies that there is no error message when typed in correctly",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy = 'username']").type("jacobl1")
      cy.get("[data-cy='usernameErr']").should("not.exist")
      cy.get("[data-cy='username']").type("jacob1").clear()
      cy.get("[data-cy='usernameErr']").should("have.text","*Username is required")
    })
    it("Run a 'Username must end with at least one number' error",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='username']").type("jacoblang")
      cy.get("[data-cy='usernameErr']").should("have.text","*Username must end with at least one number")
    })
  })
  describe("My fourth test",()=> {
    it("Runs a 'must be 6 or more in length'",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='password']").type("ashje")
      cy.get("[data-cy='passwordErr']").should("have.text","*Must be 6 or more in length")
    })
    it("Runs a 'must use at least one special character' error",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='password']").type("asdjflsdf2")
      cy.get("[data-cy='passwordErr']").should("have.text","*Must use at least one special character")
    })
    it("Runs a 'password is required' error",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='password']").type("abscdwe?1df")
      cy.get("[data-cy='passwordErr']").should("not.exist")
      cy.get("[data-cy='password']").clear()
      cy.get("[data-cy='passwordErr']").should("have.text","*Password is required")
    })
  })
  describe("My fifth test",()=> {
    it("Runs a 'must agree to the terms and conditions to proceed' error",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='terms']").click()
      cy.get("[data-cy='terms']").click()
      cy.get("[data-cy='termsErr']").should("have.text","*Must agree to terms and conditions to proceed")
    })
    it("Runs no error",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='terms']").click()
      cy.get("[data-cy='termsErr']").should("not.exist")
    })
  })
  describe("My sixth test",()=> {
    it("Runs no error",()=> {
      cy.visit("http://localhost:3000/form")
      newArray.map(n=> {
        cy.get("[data-cy='state']").select(n, {force : true})
        cy.get("[data-cy='stateErr']").should("not.exist")
      })
    })
    it("Runs the error: 'must pick your state'",()=> {
      cy.visit("http://localhost:3000/form")
      newArray.map(n=> { cy.get("[data-cy='state']").select(n, {force : true})
      cy.get("[data-cy='state']").select("--Select One--")
      cy.get("[data-cy='stateErr']").should("have.text","*Must pick your state")
    })
    })
  })
  describe("My seventh test",()=> {
    it("Runs no error for programming language selection",()=> {
      cy.visit("http://localhost:3000/form")
      programmingLanguages.map(n=> {
        cy.get("[data-cy='language']").select(n, { force: true })
        cy.get("[data-cy='languageErr']").should("not.exist")
      })
    })
    it("Runs error 'Must pick your favorite programming language'",()=> {
      cy.visit("http://localhost:3000/form")
      programmingLanguages.map(n=> {
        cy.get("[data-cy='language']").select(n)
        cy.get("[data-cy='language']").select("--Select One--")
        cy.get("[data-cy='languageErr']").should("have.text","*Must pick your favorite programming language")
      })
    })
  })
  describe("Eighth test",()=> {
    it("Runs error : 'must be a valid email address'",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='email']").type("ajsasdflaskjlksbcsdf")
      cy.get('[data-cy="emailErr"]').should("have.text","*Must be a valid email address")
    })
    it("Runs error : 'email is required'",()=> {
      cy.visit("http://localhost:3000/form")
      cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
      cy.get("[data-cy='email']").clear()
      cy.get('[data-cy="emailErr"]').should("have.text","*Email is required")
    })
  })
  describe("This submits the form and verifies URL of user page",()=> {
    it("submits the form with all the correct values",()=> {
      cy.visit("http://localhost:3000/form")
      fl.map(n=> {
        cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
     })
     cy.get("[data-cy = 'username']").type("jacobl11")
     cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
     cy.get("[data-cy='password']").type("abscdwe?1df")
     cy.get("[data-cy='language']").select("JavaScript")
     cy.get("[data-cy='state']").select("Delaware")
     cy.get("[data-cy='terms']").click()
     cy.get("[data-cy='submit']").click()
     cy.url().should("include","/user")
    })
  })
  describe("This toggles the expand and collapse user info",()=> {
    it("submits the form with all the correct values and expands user info",()=> {
      cy.visit("http://localhost:3000/form")
      fl.map(n=> {
        cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
     })
     cy.get("[data-cy = 'username']").type("jacobl11")
     cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
     cy.get("[data-cy='password']").type("abscdwe?1df")
     cy.get("[data-cy='language']").select("JavaScript")
     cy.get("[data-cy='state']").select("Delaware")
     cy.get("[data-cy='terms']").click()
     cy.get("[data-cy='submit']").click()
     cy.get("[data-cy='expandOrCollapse']").click()
     cy.get('[data-cy="nameCard"]').should("have.text","Name : Jacob Lang")
    //  cy.contains("jacoblang72@comcast.net")
    //  .should("have.text","Email : jacoblang72@comcast.net")
     cy.get('[data-cy="usernameCard"]').should("have.text","Username : jacobl11")
     cy.get('[data-cy="languageCard"]').should("have.text","Favorite Programming Language : JavaScript")
     cy.get('[data-cy="stateCard"]').should("have.text","Location : Delaware")
     cy.get("[data-cy='expandOrCollapse']").click()
     cy.get('[data-cy="expandOrCollapse"]').should("have.text","Press to expand")
    })
  })
  describe("This submits the form and then tests the menu button and then goes back to user info page",()=> {
    it("submits the form, goes to menu, and then back to user info page",()=> {
      cy.visit("http://localhost:3000/form")
      fl.map(n=> {
        cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
     })
     cy.get("[data-cy = 'username']").type("jacobl11")
     cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
     cy.get("[data-cy='password']").type("abscdwe?1df")
     cy.get("[data-cy='language']").select("JavaScript")
     cy.get("[data-cy='state']").select("Delaware")
     cy.get("[data-cy='terms']").click()
     cy.get("[data-cy='submit']").click()
     cy.wait(3000).get('[data-cy="menuIcon"]').click()
     cy.url().should("include","/")
     cy.get("[data-cy = 'userLink']").click()
     cy.url().should('include','/user')
    })})
    describe("Last Test verifies log out function",()=> {
      it("submits the form, goes to menu, and then back to login",()=> {
        cy.visit("http://localhost:3000/form")
        fl.map(n=> {
          cy.get(`[data-cy = ${n}`).type(`${n === "fname" ? "Jacob" : "Lang"}`)
       })
       cy.get("[data-cy = 'username']").type("jacobl11")
       cy.get("[data-cy='email']").type("jacoblang72@comcast.net")
       cy.get("[data-cy='password']").type("abscdwe?1df")
       cy.get("[data-cy='language']").select("JavaScript")
       cy.get("[data-cy='state']").select("Delaware")
       cy.get("[data-cy='terms']").click()
       cy.get("[data-cy='submit']").click()
       cy.wait(3000).get('[data-cy="menuIcon"]').click()
       cy.get("[data-cy = 'login']").click();
       cy.get("[data-cy='logout']").click()
       cy.get('[data-cy="userLink"]').should("not.exist")
      })})