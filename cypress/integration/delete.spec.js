describe("Delete badger card test", () => {
  const card = "[data-cy=animal-card]"

  it("Visits Animal Top Trumps", () => {
    cy.visit("/")
  })
  it("Deletes the badger card", () => {
    cy.get(card)
      .contains(card, "Badger")
      .find("[data-cy=delete-button]")
      .click()
  })
  it("Checks the badger card has been removed", () => {
    cy.get(card).should("not.contain", "badger")
  })
})
