describe("Create an animal card", () => {
  const testData = {
    name: "Tasmanian tiger",
    type: "mammal",
    diet: "carnivore",
    isExtinct: true,
  }

  it("Visits Animal Top Trumps", () => {
    cy.visit("/")
  })

  it("Deletes the badger card", () => {
    cy.get("[data-cy=add-animal-form]").within(() => {
      cy.get('input[name="name"]').type(testData.name)
      cy.get('input[name="type"]').debug()
      // select(testData.type)
      // cy.get("textarea").type("is a developer")
    })
    // .contains(card, "Badger")
    // .find("[data-cy=delete-button]")
    // .click()
  })
  // it("Checks the badger card has been removed", () => {
  //   cy.get(card).should("contain", testData.name)
  // })
})
