describe("Count", () => {
  it("Visits Animal Top Trumps", () => {
    cy.visit("/")
  })
  it("Checks for the correct number of default cards", () => {
    cy.get("[data-cy=animal-card]").should("have.length", 5)
  })
})
